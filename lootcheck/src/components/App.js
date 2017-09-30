import React from 'react';

import Loot from './Loot';
import Wallet from './Wallet';

const App = () => {
  return (
    <div>
      <h2>Loot Check</h2>
      <hr />
      <Wallet />
      <hr />
      <Loot />
      <hr />
      <div>Powered by <a href="https://www.coindesk.com/price">Coindesk</a></div>
    </div>
  );
}

export default App;
