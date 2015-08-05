dart_library.library('pantrysort/pantrysort', null, /* Imports */[
  "dart_runtime/dart",
  'dart/core',
  'dart/html'
], /* Lazy imports */[
], function(exports, dart, core, html) {
  'use strict';
  let dartx = dart.dartx;
  let ComparatorT = dart.typedef('ComparatorT', () => dart.functionType(core.int, [dart.dynamic, dart.dynamic]));
  let CompareByT = dart.typedef('CompareByT', () => dart.functionType(dart.dynamic, [html.Node]));
  let _baseElementSelector = Symbol('_baseElementSelector');
  let _containerElementCache = Symbol('_containerElementCache');
  let _getSortItems = Symbol('_getSortItems');
  let _containerElement = Symbol('_containerElement');
  class PantrySorter extends core.Object {
    PantrySorter(baseElementSelector) {
      this[_baseElementSelector] = baseElementSelector;
      this[_containerElementCache] = null;
    }
    sort(comparator, compareBy) {
      let elements = this[_getSortItems](compareBy);
      elements[dartx.sort](dart.fn((a, b) => dart.dcall(comparator, a.compareItem, b.compareItem), core.int, [PantrySortItem, PantrySortItem]));
      let docFrag = html.DocumentFragment.new();
      elements[dartx.forEach](dart.fn(e => docFrag.append(dart.as(dart.dload(e, 'element'), html.Node)), html.Node, [dart.dynamic]));
      this[_containerElement].append(docFrag);
    }
    [_getSortItems](compareBy) {
      return dart.as(this[_containerElement].children[dartx.map](dart.fn(child => new PantrySortItem(child, compareBy(child)), PantrySortItem, [html.Element]))[dartx.toList](), core.List$(PantrySortItem));
    }
    get [_containerElement]() {
      if (this[_containerElementCache] == null)
        this[_containerElementCache] = html.querySelector(this[_baseElementSelector]);
      return this[_containerElementCache];
    }
  }
  dart.setSignature(PantrySorter, {
    constructors: () => ({PantrySorter: [PantrySorter, [core.String]]}),
    methods: () => ({
      sort: [dart.void, [ComparatorT, CompareByT]],
      [_getSortItems]: [core.List$(PantrySortItem), [CompareByT]]
    })
  });
  let _element = Symbol('_element');
  let _compareBy = Symbol('_compareBy');
  class PantrySortItem extends core.Object {
    PantrySortItem(element, compareBy) {
      this[_element] = element;
      this[_compareBy] = compareBy;
    }
    get compareItem() {
      return this[_compareBy];
    }
    get element() {
      return this[_element];
    }
  }
  dart.setSignature(PantrySortItem, {
    constructors: () => ({PantrySortItem: [PantrySortItem, [html.Element, dart.dynamic]]})
  });
  // Exports:
  exports.ComparatorT = ComparatorT;
  exports.CompareByT = CompareByT;
  exports.PantrySorter = PantrySorter;
  exports.PantrySortItem = PantrySortItem;
});
//# sourceMappingURL=pantrysort.js.map