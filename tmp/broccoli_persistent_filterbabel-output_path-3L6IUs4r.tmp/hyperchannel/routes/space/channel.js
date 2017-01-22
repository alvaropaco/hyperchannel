define('hyperchannel/routes/space/channel', ['exports', 'hyperchannel/routes/space/base_channel'], function (exports, _hyperchannelRoutesSpaceBase_channel) {
  exports['default'] = _hyperchannelRoutesSpaceBase_channel['default'].extend({

    createChannelOrUserChannel: function createChannelOrUserChannel(space, channelName) {
      return this.get('smt').createChannel(space, "#" + channelName);
    }

  });
});