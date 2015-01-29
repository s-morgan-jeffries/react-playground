requirejs.config({
  // Add this map config in addition to any baseUrl or
  // paths config you may already have in the project.
  map: {
    // '*' means all modules will get 'jquery-private'
    // for their 'jquery' dependency.
    '*': {
      jquery: 'module_interfaces/jqueryPrivate'
    },
    'module_interfaces/jqueryCore': {
      jquery: 'jquery'
    }
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    react: '../bower_components/react/react'
  }
});

require(['app'], function (app) {
  'use strict';

  app.start();
});
