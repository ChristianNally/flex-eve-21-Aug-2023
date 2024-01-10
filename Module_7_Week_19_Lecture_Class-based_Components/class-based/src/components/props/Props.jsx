import React from 'react';
import Child from './Child';

const Props = class extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello world',
      count: 15
    };
  }

  render() {
    return (
      <div className="props">
				<h1>Monkey Fuzz</h1>
        <Child message={this.state.message} count={this.state.count}>
          <p>Happy Birthday!</p>
        </Child>
      </div>
    );
  }
};

export default Props;
