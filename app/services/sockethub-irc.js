import Service, { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import channelMessageFromSockethubObject from 'hyperchannel/utils/channel-message-from-sockethub-object';
import extend from 'extend';

/**
 * Build an activity object for sending to Sockethub
 *
 * @param {Space} space - space model the activity belongs to
 * @param {Object} details - the activity details
 * @returns {Object} the activity object
 * @private
 */
function buildActivityObject(space, details) {
  let baseObject = {
    context: 'irc',
    actor: space.sockethubPersonId
  };

  return extend({}, baseObject, details);
}

/**
 * Build a message object
 *
 * @param space {Space} space model instance
 * @param target {String} where to send the message to (channelId)
 * @param content {String} the message itself
 * @param type {String} can be either 'message' or 'me'
 * @returns {Object} the activity object
 */
function buildMessageObject(space, target, content, type='message') {
  return buildActivityObject(space, {
    '@type': 'send',
    target: target,
    object: {
      '@type': type,
      content: content
    }
  });
}

/**
 * This service provides helpers for SocketHub IRC communications
 * @class hyperchannel/services/sockethub-irc
 */
export default class SockethubIrcService extends Service {

  @service logger;
  @service coms;

  /**
   * - Creates an ActivityStreams person object for
   *   future use
   * - Emits credentials for future IRC server messages,
   *   like e.g. `join`
   * @public
   */
  connect (space) {
    const actorObject = {
      '@id': space.sockethubPersonId,
      '@type': "person",
      displayName: space.server.nickname
    };

    this.sockethub.ActivityStreams.Object.create(
      actorObject
    );

    let credentials = buildActivityObject(space, {
      object: {
        '@type': 'credentials',
        nick: space.server.nickname,
        server: space.server.hostname,
        port: parseInt(space.server.port, 10),
        secure: space.server.secure
      }
    });

    this.log('irc', 'connecting to IRC network', credentials);
    this.sockethub.socket.emit('credentials', credentials);
  }

  handleJoinCompleted (space, message) {
    const channel = space.channels.findBy('sockethubChannelId', message.target['@id']);
    if (channel) {
      this.observeChannel(space, channel);
    }
  }

  handlePresenceUpdate (message) {
    let hostname;
    if (typeof message.target === 'object') {
      hostname = message.target['@id'].match(/(.+)\//)[1];
    }

    let space = this.coms.spaces.findBy('server.hostname', hostname);

    if (isEmpty(space)) {
      console.warn('No space for presence update message found.', message);
      return;
    }

    let channel = space.channels.findBy('sockethubChannelId', message.target['@id']);

    if (isEmpty(channel)) {
      console.warn('No channel for presence update message found. Creating it.', message);
      channel = this.coms.createChannel(space, message.target['displayName'], message.target['@id']);
    }

    // Hotfix for adding one's own user to the channel and marking it as
    // connected.
    // ATM, Sockethub doesn't send any events or information that we
    // successfully joined a channel. So for now we just assume, if we receive
    // presence updates from other users, we should be in the channel, too.
    channel.addUser(space.userNickname);
    channel.connected = true;

    channel.addUser(message.actor.displayName);
  }

  /**
   * Join a channel/room
   * @public
   */
  join (space, channel, type) {
    switch(type) {
      case 'room':
        this.sockethub.ActivityStreams.Object.create({
          '@type': type,
          '@id': channel.sockethubChannelId,
          displayName: channel.name
        });

        var joinMsg = buildActivityObject(space, {
          '@type': 'join',
          target: channel.sockethubChannelId,
          object: {}
        });

        this.log('irc', 'joining channel', joinMsg);
        this.sockethub.socket.emit('message', joinMsg);
        break;
      case 'person':
        channel.connected = true;
        break;
    }
  }

  /**
   * Send a chat message to a channel
   * @public
   */
  transferMessage (space, target, content) {
    let message = buildMessageObject(space, target, content);

    this.log('send', 'sending message job', message);
    this.sockethub.socket.emit('message', message);
  }

  /**
   * Send an action chat message to a channel
   * @public
   */
  transferMeMessage (space, target, content) {
    let message = buildMessageObject(space, target, content, 'me');

    this.log('send', 'sending message job', message);
    this.sockethub.socket.emit('message', message);
  }

  /**
   * Add an incoming message to a channel
   * @param {Object} messsage
   * @public
   */
  addMessageToChannel (message) {
    const hostname = message.actor['@id'].match(/.+@(.+)/)[1];
    const space = this.coms.spaces.findBy('server.hostname', hostname);

    if (isEmpty(space)) {
      console.warn('Could not find space for message', message);
      return;
    }

    const channel = this.getChannelForMessage(space, message);
    const channelMessage = channelMessageFromSockethubObject(message);

    channel.addMessage(channelMessage);
  }

  /**
   * Leave a channel
   * @public
   */
  leave (space, channel) {
    if (!channel.isUserChannel) {
      // TODO Do we really need to create this room for leaving? It should
      // already have been created when joining.
      this.sockethub.ActivityStreams.Object.create({
        '@type': "room",
        '@id': channel.sockethubChannelId,
        displayName: channel.name
      });

      let leaveMsg = buildActivityObject(space, {
        '@type': 'leave',
        target: channel.sockethubChannelId,
        object: {}
      });

      this.log('leave', 'leaving channel', leaveMsg);
      this.sockethub.socket.emit('message', leaveMsg);
    }
  }

  /**
   * Send a channel topic change
   * @public
   */
  changeTopic (space, channel, topic) {
    let topicMsg = buildActivityObject(space, {
      '@type': 'update',
      target: channel.sockethubChannelId,
      object: {
        '@type': 'topic',
        topic: topic
      }
    });

    this.sockethub.socket.emit('message', topicMsg);
  }

  /**
   * Ask for a channel's attendance list (users currently joined)
   * @public
   */
  observeChannel (space, channel) {
    let observeMsg = buildActivityObject(space, {
      '@type': 'observe',
      target: channel.sockethubChannelId,
      object: {
        '@type': 'attendance'
      }
    });

    this.log('irc', 'asking for attendance list', observeMsg);
    this.sockethub.socket.emit('message', observeMsg);
  }

  /**
   * Generate a Sockethub Channel ID.
   *
   * @param {Space} space
   * @param {String} channelName - name of the channel
   * @returns {String} Sockethub channel ID
   * @public
   */
  generateChannelId (space, channelName) {
    return `${space.server.hostname}/${channelName}`;
  }

  /**
   * Get the channel for the given space and message.
   *
   * @param {Space} space
   * @param {Object} message
   * @returns {Channel} channel
   * @public
   */
  getChannelForMessage (space, message) {
    let targetChannelName, channel;

    if (space.userNickname === message.target.displayName) {
      // direct message
      targetChannelName = message.actor.displayName || message.actor['@id'];

      channel = space.channels.findBy('name', targetChannelName);
      if (!channel) {
        channel = this.coms.createUserChannel(space, targetChannelName);
      }
    } else {
      // channel message
      targetChannelName = message.target.displayName;

      channel = space.channels.findBy('name', targetChannelName);
      if (!channel) {
        channel = this.coms.createChannel(space, targetChannelName);
      }
    }

    return channel;
  }

  /**
   * Utility function for easier logging
   * @protected
   */
  log () {
    this.logger.log(...arguments);
  }

}
