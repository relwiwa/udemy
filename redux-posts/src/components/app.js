import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* Tell React to render nested route components here */}
        {this.props.children}
      </div>
    );
  }
}
