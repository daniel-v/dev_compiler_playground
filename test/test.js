"use strict";

// ES6 - will be prettier than ES 5
//window.addEventListener("load", () => {
//    /* global PantrySorter */
//    new PantrySorter(".sort-these").sort((a, b) => a.localeCompare(b), e => e.textContent );
//}, false);


/* ES5 */
window.addEventListener("load", function()  {
    /* global PantrySorter */
    new PantrySorter(".sort-these").sort(function(a, b) { return a.localeCompare(b); }, function(e) { return e.textContent; } );
}, false);
