import 'dart:html';
import 'package:pantrysort/pantrysort.dart';

void main() {
  new PantrySorter(".sort-these").sort((String a, String b) => a.compareTo(b), (Element e) => e.text );
}