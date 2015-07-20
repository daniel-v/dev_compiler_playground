"use strict";

window.addEventListener("load", () => {
    /* global PantrySorter */
    new PantrySorter(".sort-these").sort((a, b) => a.localeCompare(b), e => e.textContent );
}, false);
