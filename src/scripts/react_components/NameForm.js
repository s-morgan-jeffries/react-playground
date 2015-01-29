// jshint quotmark: false
// jshint trailing: false
define(function (require) {
  'use strict';

  var React = require('react');

  return React.createClass({
    handleChange: function () {
      this.props.onUserInput(this.refs.nameInput.getDOMNode().value);
    },
    render: function () {
      return (
        React.createElement("form", null, 
          React.createElement("input", {onChange: this.handleChange, ref: "nameInput", type: "text", value: this.props.name})
        )
      );
    }
  });
});
