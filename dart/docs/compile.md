# Pantry-sort Dart version

Same library written in dart and to be compiled with Dart Dev Compiler

## Compilation steps

These instructions are for Windows platform, should be similar or even simpler on non-windows systems.

1. `pub global activate dev_compiler`
2. Locate your pub cache runtime folder for dev_compiler `%APPDATA%\Pub\Cache\hosted\pub.dartlang.org\dev_compiler-0.1.5+1\lib\runtime`
3. In cmd: `SET RUNTIME_DIR="%APPDATA%\Pub\Cache\hosted\pub.dartlang.org\dev_compiler-0.1.5+1\lib\runtime"`
4. Navigate to package root dir - `dart`
5. `pub global run dev_compiler:devc --runtime-dir %RUNTIME_DIR% -o es6-transcompiled web\index.html`
6. `gulp compile_dart`