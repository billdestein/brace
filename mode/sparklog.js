ace.define("ace/mode/sparklog_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

var SparklogHighlightRules = function() {
    this.$rules = {
        "start" : [
            {
                token : "sparklog-error",
                regex : /^.*?[Ee][Rr][Rr][Oo][Rr].*$|^.*?[Ff][Aa][Ii][Ll].*$|^.*?[Ee][Xx][Cc][Ee][Pp][Tt][Ii][Oo][Nn].*$/
            }, {
                token : "sparklog-warning",
                regex : /^.*?[Ww][Aa][Rr][Nn].*$/
            }, {
                token : "sparklog-success",
                regex : /^.*?[Nn][Oo][Rr][Mm][Aa][Ll].*$|^.*?[Ss][Uu][Cc][Cc][Ee].*$/
            }
        ]
    };

    this.normalizeRules();
};

SparklogHighlightRules.metaData = {
    fileTypes: ['sparklog'],
    name: 'Sparklog'
};

oop.inherits(SparklogHighlightRules, TextHighlightRules);

exports.SparklogHighlightRules = SparklogHighlightRules;
});

ace.define("ace/mode/sparklog",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sparklog_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextMode = acequire("./text").Mode;
var SparklogHighlightRules = acequire("./sparklog_highlight_rules").SparklogHighlightRules;

var Mode = function() {
    this.HighlightRules = SparklogHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "#";
    this.$id = "ace/mode/sparklog";
}).call(Mode.prototype);

exports.Mode = Mode;
});
