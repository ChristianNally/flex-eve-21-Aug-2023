import React from 'react';
import './App.css';

// import UpdateState from './components/state/UpdateState';
// import Props from './components/props/Props';
import Lifecycle from './components/lifecycle/Lifecycle';
// import Widget from './components/Widget';

const App = () => {

	const [display, setDisplay] = useState(true);

  return (
    <div className="App">
			<h1>TEST</h1>
			{/* <Widget /> */}
      {/* <UpdateState /> */}
      {/* <Props /> */}

      { display && <Lifecycle /> }
    </div>
  );
};

export default App;
