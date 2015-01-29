// jshint quotmark: false
// jshint trailing: false
define(function (require) {
  'use strict';

  var React = require('react');

  return React.createClass({
    handleChange: function () {
      var rawValue = this.refs.input.getDOMNode().value;
      this.props.onUserInput();
    },
    render: function () {
      return (
        <input onChange={this.handleChange} ref="input" type="number" value={this.props.value}/>
      );
    }
  });
});
