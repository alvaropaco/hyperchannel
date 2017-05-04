import Ember from 'ember';

const {
  inject: {
    service
  }
} = Ember;


/**
 * Build an activity object for sending to Sockethub
 *
 * @param space {Space} space model the activity belongs to
 * @param details {Object} the activity details
 * @returns {Object} the activity object
 * @private
 */
function buildActivityObject(space, details) {
  let baseObject = {
    context: 'irc',
    actor: space.get('sockethubPersonId')
  };

  return Ember.$.extend({}, baseObject, details);
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
 * @module hyperchannel/services/sockethub-irc
 */
export default Ember.Service.extend({

  logger: service(),
  coms: service(),

  /**
   * - Creates an ActivityStreams person object for
   *   future use
   * - Emits credentials for future IRC server messages,
   *   like e.g. `join`
   * @public
   */
  connect(space) {
    this.sockethub.ActivityStreams.Object.create({
      '@id': space.get('sockethubPersonId'),
      '@type': "person",
      displayName: space.get('server.nickname')
    });

    let credentials = buildActivityObject(space, {
      object: {
        '@type': 'credentials',
        nick: space.get('server.nickname'),
        server: space.get('server.hostname'),
        port: space.get('server.port'),
        secure: space.get('server.secure')
      }
    });

    this.log('irc', 'connecting to IRC network', credentials);
    this.sockethub.socket.emit('credentials', credentials);
  },

  /**
   * Join a channel/room
   * @public
   */
  join: function(space, channel, type) {
    this.sockethub.ActivityStreams.Object.create({
      '@type': type,
      '@id': channel.get('sockethubChannelId'),
      displayName: channel.get('name')
    });

    let joinMsg = buildActivityObject(space, {
      '@type': 'join',
      target: channel.get('sockethubChannelId'),
      object: {}
    });

    this.log('irc', 'joining channel', joinMsg);
    this.sockethub.socket.emit('message', joinMsg);
  },

  /**
   * Send a chat message to a channel
   * @public
   */
  transferMessage(space, target, content) {
    let message = buildMessageObject(space, target, content);

    this.log('send', 'sending message job', message);
    this.sockethub.socket.emit('message', message);
  },

  /**
   * Send an action chat message to a channel
   * @public
   */
  transferMeMessage(space, target, content) {
    let message = buildMessageObject(space, target, content, 'me');

    this.log('send', 'sending message job', message);
    this.sockethub.socket.emit('message', message);
  },

  /**
   * Leave a channel
   * @public
   */
  leave(space, channel) {
    // TODO Do we really need to create this room for leaving? It should
    // already have been created when joining.
    this.sockethub.ActivityStreams.Object.create({
      '@type': "room",
      '@id': channel.get('sockethubChannelId'),
      displayName: channel.get('name')
    });

    let leaveMsg = buildActivityObject(space, {
      '@type': 'leave',
      target: channel.get('sockethubChannelId'),
      object: {}
    });

    this.log('leave', 'leaving channel', leaveMsg);
    this.sockethub.socket.emit('message', leaveMsg);
  },


  /**
   * Send a channel topic change
   * @public
   */
  changeTopic(space, channel, topic) {
    let topicMsg = buildActivityObject(space, {
      '@type': 'update',
      target: channel.get('sockethubChannelId'),
      object: {
        '@type': 'topic',
        topic: topic
      }
    });

    this.sockethub.socket.emit('message', topicMsg);
  },

  /**
   * Ask for a channel's attendance list (users currently joined)
   * @public
   */
  observeChannel(space, channel) {
    let observeMsg = buildActivityObject(space, {
      '@type': 'observe',
      target: channel.get('sockethubChannelId'),
      object: {
        '@type': 'attendance'
      }
    });

    this.log('irc', 'asking for attendance list', observeMsg);
    this.sockethub.socket.emit('message', observeMsg);
  },

  /**
   * Utility function for easier logging
   * @protected
   */
  log() {
    this.get('logger').log(...arguments);
  }
});