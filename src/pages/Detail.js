import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, {chance.first()}</p>
        <p>You are from {chance.country({full: true})}</p>
      </div>
    );
  }
}

export default Detail; 
