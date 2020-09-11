var postcss = require('postcss');

module.exports = postcss.plugin('remove-rules', function (ignoredOpts) {
    /* Special plugin that removed all traces of the .theme--light class from the vuetify stylesheet */
    return function (css) {
        css.walkRules(function (rule) {
            if (rule.selector.includes(".theme--light")) {
                rule.remove();
            }
        });
    };
});