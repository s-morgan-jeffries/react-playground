define(function (require) {
  'use strict';

  var App = require('react_components/App'),
    mountNode = document.getElementById('react-application');

  return {
    start: function () {
      App.mount(mountNode);
    }
  };
});
