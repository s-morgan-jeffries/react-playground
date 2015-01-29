// jshint quotmark: false
// jshint trailing: false
define(function (require) {
  'use strict';

  var React = require('react');

  return React.createClass({
    render: function () {
      var name = this.props.name,
        greeting = name ? 'Hello, ' + name + '!' : 'Hello!';
      return (
        <div>{greeting}</div>
      );
    }
  });

});
