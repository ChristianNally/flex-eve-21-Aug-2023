import {useState} from 'react';

const useCounter = () => {

	const [count, setCount] = useState(0);

	const handleMinus = (event) => {
		setCount((prev) => {
			return prev - 1;
		});
	};

	const handlePlus = (event) => {
		setCount((prev) => {
			return prev + 1;
		});
	};

	return [
		count,
		handleMinus,
		handlePlus
	];

};

export default useCounter;