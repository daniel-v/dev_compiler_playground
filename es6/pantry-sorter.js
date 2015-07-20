"use strict";

/**
 * Sorter class that uses DOM as a source of data
 * and will sort the DOM Elements based on a user defined criteria
 *
 * @example
 * new PantrySorter(".sort-these").sort((a, b) => a.localeCompare(b), e => e.textContent );
 */
class PantrySorter {
    /**
     *
     * @param {Element} baseElementSelector Selector to the base element, the childre on which will be sorted
     */
    constructor(baseElementSelector = null) {
        if(!baseElementSelector)
            throw new TypeError("baseElementSelector must be a valid selector to a DOM element");

        this._baseElementSelector = baseElementSelector;
    }

    /**
     * Sort the DOM elements
     * @param {function} comparator Comperator function implementation
     * @param {function} compareBy The property by which the comparison should happen
     */
    sort(comparator = null, compareBy = null) {
        if(typeof comparator !== "function")
            throw new TypeError("Comperator must be a function");
        if(typeof compareBy !== "function")
            throw new TypeError("compareBy must be a function");

        // sort elements
        let elements = this._getSortItems(compareBy);
        elements.sort((a, b) => comparator(a.compareItem, b.compareItem));

        // update DOM
        let docFrag = new DocumentFragment();
        elements.forEach(e => docFrag.appendChild(e.element));
        this._containerElement.appendChild(docFrag);
    }

    // TODO: create an ES6 generator
    /**
     * Get the list of child elements for sorting
     * @param {function} compareBy
     * @returns {PantrySortItem[]} List of childNodes that need to be sorted
     * @private
     */
    _getSortItems(compareBy) {
        let children = this._containerElement.children;
        let itemList = [];
        for(let i = 0; i < children.length; ++i) {
            let cc = children[i];
            let item = new PantrySortItem(cc, compareBy(cc));
            itemList.push(item);
        }
        return itemList;
    }

    get _containerElement() {
        if(!this._containerElementCache)
            this._containerElementCache = document.querySelector(this._baseElementSelector);
        return this._containerElementCache;
    }
}

class PantrySortItem {
    constructor(element = null, compareBy = "") {
        this._element = element;
        this._compareBy = compareBy;
    }

    /**
     * @returns {string}
     */
    get compareItem() {
        return this._compareBy;
    }

    get element() {
        return this._element;
    }
}