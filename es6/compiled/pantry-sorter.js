"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PantrySorter = (function () {
    /**
     *
     * @param {Element} baseElementSelector Selector to the base element, the childre on which will be sorted
     */

    function PantrySorter() {
        var baseElementSelector = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

        _classCallCheck(this, PantrySorter);

        if (!baseElementSelector) throw new TypeError("baseElementSelector must be a valid selector to a DOM element");

        this._baseElementSelector = baseElementSelector;
    }

    _createClass(PantrySorter, [{
        key: "sort",

        /**
         * Sort the DOM elements
         * @param {Function} comparator Comperator implementation
         * @param {function} compareBy The prop by which the comparison should happen
         */
        value: function sort() {
            var comparator = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
            var compareBy = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

            if (typeof comparator !== "function") throw new TypeError("Comperator must be a function");
            if (typeof compareBy !== "function") throw new TypeError("compareBy must be a function");

            // sort elements
            var elements = this._getSortItems(compareBy);
            elements.sort(function (a, b) {
                return comparator(a.compareItem, b.compareItem);
            });

            // update DOM
            var docFrag = new DocumentFragment();
            elements.forEach(function (e) {
                return docFrag.appendChild(e.element);
            });
            this._containerElement.appendChild(docFrag);
        }
    }, {
        key: "_getSortItems",

        // TODO: create an ES6 generator
        /**
         * Get the list of child elements for sorting
         * @param {function} compareBy
         * @returns {PantrySortItem[]} List of childNodes that need to be sorted
         * @private
         */
        value: function _getSortItems(compareBy) {
            var children = this._containerElement.children;
            var itemList = [];
            for (var i = 0; i < children.length; ++i) {
                var cc = children[i];
                var item = new PantrySortItem(cc, compareBy(cc));
                itemList.push(item);
            }
            return itemList;
        }
    }, {
        key: "_containerElement",
        get: function get() {
            if (!this._containerElementCache) this._containerElementCache = document.querySelector(this._baseElementSelector);
            return this._containerElementCache;
        }
    }]);

    return PantrySorter;
})();

var PantrySortItem = (function () {
    function PantrySortItem() {
        var element = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
        var compareBy = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];

        _classCallCheck(this, PantrySortItem);

        this._element = element;
        this._compareBy = compareBy;
    }

    _createClass(PantrySortItem, [{
        key: "compareItem",

        /**
         * @returns {string}
         */
        get: function get() {
            return this._compareBy;
        }
    }, {
        key: "element",
        get: function get() {
            return this._element;
        }
    }]);

    return PantrySortItem;
})();
//# sourceMappingURL=pantry-sorter.js.map