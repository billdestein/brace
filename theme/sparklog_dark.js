ace.define("ace/theme/sparklog_dark",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-sparklog-dark";
exports.cssText = ".ace-sparklog-dark .ace_gutter {\
background: #1a1a1a;\
color: #BEBEBE\
}\
.ace-sparklog-dark .ace_print-margin {\
width: 1px;\
background: #1a1a1a\
}\
.ace-sparklog-dark {\
background-color: #0F0F0F;\
color: #FFFFFF\
}\
.ace-sparklog-dark .ace_cursor {\
color: #FFFFFF\
}\
.ace-sparklog-dark .ace_marker-layer .ace_selection {\
background: #6699CC\
}\
.ace-sparklog-dark.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #0F0F0F;\
}\
.ace-sparklog-dark .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-sparklog-dark .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #404040\
}\
.ace-sparklog-dark .ace_marker-layer .ace_active-line {\
background: #333333\
}\
.ace-sparklog-dark .ace_gutter-active-line {\
background-color: #333333\
}\
.ace-sparklog-dark .ace_marker-layer .ace_selected-word {\
border: 1px solid #6699CC\
}\
.ace-sparklog-dark .ace_invisible {\
color: #404040\
}\
.ace-sparklog-dark .ace_keyword,\
.ace-sparklog-dark .ace_meta {\
color: #FF6600\
}\
.ace-sparklog-dark .ace_constant,\
.ace-sparklog-dark .ace_constant.ace_character,\
.ace-sparklog-dark .ace_constant.ace_character.ace_escape,\
.ace-sparklog-dark .ace_constant.ace_other {\
color: #339999\
}\
.ace-sparklog-dark .ace_constant.ace_numeric {\
color: #99CC99\
}\
.ace-sparklog-dark .ace_invalid,\
.ace-sparklog-dark .ace_invalid.ace_deprecated {\
color: #CCFF33;\
background-color: #000000\
}\
.ace-sparklog-dark .ace_fold {\
background-color: #FFCC00;\
border-color: #FFFFFF\
}\
.ace-sparklog-dark .ace_entity.ace_name.ace_function,\
.ace-sparklog-dark .ace_support.ace_function,\
.ace-sparklog-dark .ace_variable {\
color: #FFCC00\
}\
.ace-sparklog-dark .ace_variable.ace_parameter {\
font-style: italic\
}\
.ace-sparklog-dark .ace_string {\
color: #66FF00\
}\
.ace-sparklog-dark .ace_string.ace_regexp {\
color: #44B4CC\
}\
.ace-sparklog-dark .ace_comment {\
color: #9933CC\
}\
.ace-sparklog-dark .ace_entity.ace_other.ace_attribute-name {\
font-style: italic;\
color: #99CC99\
}\
.ace-sparklog-dark .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYNDTc/oPAALPAZ7hxlbYAAAAAElFTkSuQmCC) right repeat-y\
}\
.ace-sparklog-dark .ace_sparklog-error {\
color: white;\
background-color: red;\
}\
.ace-sparklog-dark .ace_sparklog-warning {\
color: black;\
background-color: yellow;\
}\
.ace-sparklog-dark .ace_sparklog-success {\
color: white;\
background-color: green;\
}\
";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
