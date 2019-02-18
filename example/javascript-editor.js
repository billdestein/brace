var ace = require('toolbox-brace');
require('toolbox-brace/mode/javascript');
require('toolbox-brace/theme/monokai');
require('toolbox-brace/keybinding/vim');

var editor = ace.edit('javascript-editor');
editor.getSession().setMode('ace/mode/javascript');
editor.setTheme('ace/theme/monokai');
editor.setKeyboardHandler('ace/keyboard/vim');
editor.setValue([
    '// JavaScript'
  , 'var a = 3;'
  , ''
  , '// below line has an error which is annotated'
  , 'var b ='
  ].join('\n')
);
editor.clearSelection();
