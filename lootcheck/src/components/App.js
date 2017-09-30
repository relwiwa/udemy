import React, { Component } from 'react';

import Loot from './Loot';
import Wallet from './Wallet';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Loot Check</h2>
        <hr />
        <Wallet />
        <hr />
        <Loot />
      </div>
    );
  }
}

export default App;

