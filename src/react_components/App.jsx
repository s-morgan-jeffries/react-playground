// jshint quotmark: false
// jshint trailing: false
define(function (require) {
  'use strict';

  var React = require('react'),
    Hello = require('react_components/Hello'),
    NameForm = require('react_components/NameForm');

  var App = React.createClass({
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
        <section>
          <h3>Name:</h3>
          <NameForm onUserInput={this.handleUserInput} name={this.state.name}></NameForm>
          <h3>Greeting:</h3>
          <Hello name={this.state.name}></Hello>
        </section>
      );
    }
  });

  return {
    mount: function (mountNode) {
      React.render(<App />, mountNode);
    }
  };

});
