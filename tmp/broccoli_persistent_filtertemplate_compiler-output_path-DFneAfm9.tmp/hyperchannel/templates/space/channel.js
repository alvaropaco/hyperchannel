export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@2.8.3",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 6,
          "column": 0
        }
      },
      "moduleName": "hyperchannel/templates/space/channel.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","channel-container",[],["channel",["subexpr","@mut",[["get","model",["loc",[null,[1,28],[1,33]]],0,0,0,0]],[],[],0,0],"newMessage",["subexpr","@mut",[["get","newMessage",["loc",[null,[2,31],[2,41]]],0,0,0,0]],[],[],0,0],"onMessage",["subexpr","action",["sendMessage"],[],["loc",[null,[3,30],[3,52]]],0,0],"onCommand",["subexpr","action",["executeCommand"],[],["loc",[null,[4,30],[4,55]]],0,0],"menu",["subexpr","route-action",["menu"],[],["loc",[null,[5,25],[5,46]]],0,0]],["loc",[null,[1,0],[5,48]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));