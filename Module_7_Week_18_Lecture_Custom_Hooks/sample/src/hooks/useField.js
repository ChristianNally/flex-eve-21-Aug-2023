import {useState} from 'react';

const useField = () => {
	const [value, setValue] = useState('monkeyfuzz');

	const fieldHandler = (event) => {
		setValue(event.target.value);
	};

	return {
		value,
		fieldHandler
	};
	
};

export default useField;




