import React, { useContext } from 'react';
import MessageContext from './MessageContext';

const ChildTwo = (props) => {

	const { setCount } = useContext(MessageContext);

	return (
		<>
			<h2>ChildTwo</h2>
			<button onClick={() => setCount(prev => prev + 1)}>Click Me</button>
		</>
	);
};

export default ChildTwo;
