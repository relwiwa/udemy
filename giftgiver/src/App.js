import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Gift from './Gift';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifts: [],
    }
  }

  addGift = () => {
    const gifts = [...this.state.gifts];

    const ids= this.state.gifts.map(gift => gift.id);
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;

    gifts.push({ id: maxId + 1 });
    this.setState({ gifts });
  };

  removeGift = (id) => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);

    this.setState({ gifts });
  };

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
        <div className="gift-list">
          {this.state.gifts.map(gift => {
            return (
              <Gift
                key={gift.id}
                gift={gift}
                removeGift={this.removeGift}
              />
            );
          })}
        </div>
      </div>
    )
  }
}

export default App;
