define('hyperchannel/components/message-chat-me/component', ['exports', 'hyperchannel/components/message-chat/component'], function (exports, _hyperchannelComponentsMessageChatComponent) {
  exports['default'] = _hyperchannelComponentsMessageChatComponent['default'].extend({
    classNames: ['chat-message', 'chat-me-message']
  });
});