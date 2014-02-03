var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'startaband'
    },
    port: 3000,
    db: 'mongodb://localhost/startaband-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'startaband'
    },
    port: 3000,
    db: 'mongodb://localhost/startaband-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'startaband'
    },
    port: 3000,
    db: 'mongodb://localhost/startaband-production'
  }
};

module.exports = config[env];
