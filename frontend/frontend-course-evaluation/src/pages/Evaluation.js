import React, { Component } from 'react';

class Evaluation extends Component {
  componentDidMount = () => {
    console.log(this.props);
  };
  render() {
    return (
      <div>
        <h2>Hello world</h2>
      </div>
    );
  }
}

export default Evaluation;
