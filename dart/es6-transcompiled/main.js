dart_library.library('main', null, /* Imports */[
  "dart_runtime/dart",
  'pantrysort/pantrysort',
  'dart/core',
  'dart/html'
], /* Lazy imports */[
], function(exports, dart, pantrysort, core, html) {
  'use strict';
  let dartx = dart.dartx;
  function main() {
    new pantrysort.PantrySorter(".sort-these").sort(dart.fn((a, b) => a[dartx.compareTo](b), core.int, [core.String, core.String]), dart.as(dart.fn(e => e.text, core.String, [html.Element]), pantrysort.CompareByT));
  }
  dart.fn(main, dart.void, []);
  // Exports:
  exports.main = main;
});
//# sourceMappingURL=main.js.map