import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a connected Wallet component', () => {
    /* - app.debug shows the rendered component's HTML
        - connected Components are in a Connect-Tag:
          <Connect(Wallet) />
        - testing the existence of a connected component
          it's necessary to find('Connect(Component)') */
    //console.log(app.debug());

    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });

});
