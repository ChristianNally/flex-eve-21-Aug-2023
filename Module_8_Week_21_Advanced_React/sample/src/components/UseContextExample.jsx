import React from 'react';
import { useState } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import InBetween from './InBetween';

import MessageContext from './MessageContext';

const UseContextExample = () => {

	const [count, setCount] = useState(42);

	return (
		<MessageContext.Provider value={{count, setCount}}>
			<h1>UseContextExample</h1>
			<InBetween />
			<ChildTwo />
		</MessageContext.Provider>
	);
};

export default UseContextExample;