import React, { useContext } from 'react';
import MessageContext from './MessageContext';

const ChildOne = () => {

	const {count} = useContext(MessageContext);

	return (
		<>
			<h4>ChildOne</h4>
			<h6>The count is: {count}</h6>
		</>
	);
};

export default ChildOne;
