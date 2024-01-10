import { useState } from 'react';

function Blog(props) {
	console.log('blog render is running.');
	// const returnArray = useState(0);
	// const count = returnArray[0];
	// const setCount = returnArray[1];

	const [count, setCount] = useState(0);
	const [textFieldValue, setTextFieldValue] = useState('');
	const [updatedTitle, setUpdatedTitle] = useState(props.title);

	// count = count + 1; // DO NOT MODIFY STATE DIRECTLY
	// setCount(count + 1); // THIS CAUSES AN INFINITE LOOP

	const handleMinus = (event) => {
		setCount((prev) => {return prev - 1});
		props.decrementTotal();
	};

	const handlePlus = (event) => {
		setCount((prev) => {return prev + 1});
		props.incrementTotal();
	};

	return (
		<div className="blog">
			<h1>{ props.title } :: { textFieldValue } :: { updatedTitle } :: { count } / { props.total }</h1>
			<p>{ props.body }</p>

			<button onClick={ handleMinus }>-</button>

			<input type="text" onChange={ (event) => { setTextFieldValue(event.target.value) } } value={ textFieldValue } />
			<button onClick={ () => { setUpdatedTitle(textFieldValue) } } >Submit</button>

			<button onClick={ handlePlus }>+</button>
		</div>
	);
}

export default Blog;