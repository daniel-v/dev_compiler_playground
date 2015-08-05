part of pantrysort;

typedef int ComparatorT(dynamic a, dynamic b);
typedef dynamic CompareByT(Node e);

class PantrySorter {
  PantrySorter(this._baseElementSelector);

  void sort(ComparatorT comparator, CompareByT compareBy) {
    var elements = _getSortItems(compareBy);
    elements.sort((PantrySortItem a, PantrySortItem b) => comparator(a.compareItem, b.compareItem));

    var docFrag = new DocumentFragment();
    elements.forEach((e) => docFrag.append(e.element));
    _containerElement.append(docFrag);
  }

  List<PantrySortItem> _getSortItems(CompareByT compareBy) {
    return _containerElement.children
      .map((Element child) => new PantrySortItem(child, compareBy(child))).toList();
  }

  Element get _containerElement {
    if(_containerElementCache == null)
      _containerElementCache = querySelector(_baseElementSelector);
    return _containerElementCache;
  }

  Element _containerElementCache;

  final String _baseElementSelector;
}

class PantrySortItem {
  PantrySortItem(this._element, this._compareBy);

  dynamic get compareItem => _compareBy;
  Element get element => _element;

  final Element _element;
  final dynamic _compareBy;
}