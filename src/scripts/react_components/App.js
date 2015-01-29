// jshint quotmark: false
// jshint trailing: false
define(function (require) {
  'use strict';

  var React = require('react'),
    Hello = require('react_components/Hello'),
    NameForm = require('react_components/NameForm');

  var App = React.createClass({displayName: "App",
    getInitialState: function () {
      return {
        name: 'World'
      };
    },
    handleUserInput: function (name) {
      this.setState({
        name: name
      });
    },
    render: function () {
      return (
        React.createElement("section", null, 
          React.createElement("h3", null, "Name:"), 
          React.createElement(NameForm, {onUserInput: this.handleUserInput, name: this.state.name}), 
          React.createElement("h3", null, "Greeting:"), 
          React.createElement(Hello, {name: this.state.name})
        )
      );
    }
  });

  return {
    mount: function (mountNode) {
      React.render(React.createElement(App, null), mountNode);
    }
  };

});
