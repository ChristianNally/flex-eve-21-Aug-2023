import React from 'react';

// useEffect(() => {
// 	// TODO add business logic
// 	const intRef = setInterval(() => {
// 		console.log('beat');		
// 	}, 444);
// 	// TODO add business logic
// 	return () => {
// 		clearInterval(intRef);
// 	};
// }, []);

const Lifecycle = class extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    console.log('component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update');
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Methods</h2>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
};


export default Lifecycle;
