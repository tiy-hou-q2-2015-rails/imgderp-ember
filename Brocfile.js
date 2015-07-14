var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
    'ember-bootstrap': {
        'importBootstrapTheme': true
    }
});

module.exports = app.toTree();
