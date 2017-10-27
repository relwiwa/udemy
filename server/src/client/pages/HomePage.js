import React from 'react';

const Home = () => {
  return (
    <div className="center-align" style={{ marginTop: '20px'}}>
      <h3>Welcome</h3>
      <button className="btn" onClick={() => console.log('I have been clicked')}>Click me</button>
    </div>
  );
};

export default {
  component: Home,
};
