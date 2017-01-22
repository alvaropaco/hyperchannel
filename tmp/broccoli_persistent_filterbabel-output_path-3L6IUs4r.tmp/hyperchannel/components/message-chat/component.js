define('hyperchannel/components/message-chat/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'div',
    classNames: ['chat-message'],

    formattedContent: (function () {
      var content = this.get('message.content');

      var out = linkifyStr(content, {
        linkAttributes: { rel: 'nofollow' },
        validate: {
          url: function url(value) {
            return (/^(http)s?:\/\//.test(value)
            );
          }
        }
      });

      out = out.replace(/\u0003(\d+)/g, '<span class="color-$1">').replace(/\"color-(\d)\"/g, '"color-0$1"').replace(/\u000f/, '</span>');

      return _ember['default'].String.htmlSafe(out);
    }).property('message.content')

  });
});