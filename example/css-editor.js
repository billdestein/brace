var ace = require('toolbox-brace');
require('toolbox-brace/mode/css');
require('toolbox-brace/theme/solarized_light');

var editor = ace.edit('css-editor');
editor.setTheme('ace/theme/solarized_light');
editor.getSession().setMode('ace/mode/css');
