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
          "line": 2,
          "column": 0
        }
      },
      "moduleName": "hyperchannel/components/notification-topic-change/template.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createTextNode("Topic was changed to \"");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\" by ");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("span");
      dom.setAttribute(el1,"class","username");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [3]);
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
      morphs[1] = dom.createAttrMorph(element0, 'data-username');
      morphs[2] = dom.createMorphAt(element0,0,0);
      return morphs;
    },
    statements: [
      ["content","message.content",["loc",[null,[1,22],[1,41]]],0,0,0,0],
      ["attribute","data-username",["get","message.nickname",["loc",[null,[1,85],[1,101]]],0,0,0,0],0,0,0,0],
      ["content","message.nickname",["loc",[null,[1,104],[1,124]]],0,0,0,0]
    ],
    locals: [],
    templates: []
  };
}()));