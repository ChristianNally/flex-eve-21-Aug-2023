import './App.css';
import useCounter from './hooks/useCounter';
import useField from './hooks/useField';
import useLocation from './hooks/useLocation';
import useAPI from './hooks/useAPI';

import {useState, useEffect} from 'react';

function App() {

	const [ count, handleMinus, handlePlus ] = useCounter(); // useState
	const [ count2, handleMinus2, handlePlus2 ] = useCounter(); // useState

	const { value, fieldHandler } = useField();
	const { password, passwordHandler } = useField();

	const { location } = useLocation();

	const { data, pending } = useAPI('https://api.kanye.rest/');
  
  return (
    <div className="App">
			<h1>React App</h1>

			{/* <label for="login">Login</label>
			<br/>
			<input id="login" onChange={fieldHandler} value={value} />
			<h3>{value}</h3>

			<label for="password">Password</label>
			<br/>
			<input id="password" onChange={passwordHandler} value={password} />
			<h3>{password}</h3> */}

			{/* <p>Count: {count}</p>
			<button onClick={handleMinus}>-</button>
			<button onClick={handlePlus}>+</button>

			<p>Count2: {count2}</p>
			<button onClick={handleMinus2}>-</button>
			<button onClick={handlePlus2}>+</button> */}

			{/* <p>
				<p>
					Latitude: {location.lat}
				</p>
				<p>
					Longitude: {location.lon}
				</p>
			</p> */}

			{ pending && "Loading..."}
			{ !pending && <p>{data.quote}</p>}

    </div>
  );
}

export default App;
