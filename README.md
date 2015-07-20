# Pantry-sort

Sort DOM elements by a configurable property

<a name="PantrySorter"></a>
## PantrySorter
Sorter class that uses DOM as a source of data
and will sort the DOM Elements based on a user defined criteria

**Kind**: global class  

* [PantrySorter](#PantrySorter)
  * [new PantrySorter(baseElementSelector)](#new_PantrySorter_new)
  * [.sort(comparator, compareBy)](#PantrySorter+sort)

<a name="new_PantrySorter_new"></a>
### new PantrySorter(baseElementSelector)

| Param | Type | Description |
| --- | --- | --- |
| baseElementSelector | <code>Element</code> | Selector to the base element, the childre on which will be sorted |

**Example**  
```js
new PantrySorter(".sort-these").sort((a, b) => a.localeCompare(b), e => e.textContent );
```
<a name="PantrySorter+sort"></a>
### pantrySorter.sort(comparator, compareBy)
Sort the DOM elements

**Kind**: instance method of <code>[PantrySorter](#PantrySorter)</code>  

| Param | Type | Description |
| --- | --- | --- |
| comparator | <code>function</code> | Comperator function implementation |
| compareBy | <code>function</code> | The property by which the comparison should happen |

