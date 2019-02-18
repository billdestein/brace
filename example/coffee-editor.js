var ace = require('toolbox-brace');
require('toolbox-brace/mode/coffee');
require('toolbox-brace/theme/vibrant_ink');
require('toolbox-brace/keybinding/vim');

var editor = ace.edit('coffee-editor');
editor.setTheme('ace/theme/vibrant_ink');
editor.setKeyboardHandler('ace/keyboard/vim');
editor.getSession().setMode('ace/mode/coffee');
editor.setValue([
    '# Coffee'
  , 'square = (x) -> x * x'
  , ''
  , '# below line has an error which is annotated'
  , 'square = x -> x * '
  ].join('\n')
);
editor.clearSelection();
