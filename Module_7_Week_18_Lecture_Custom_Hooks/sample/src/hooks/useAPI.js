import {useState, useEffect} from 'react';
import axios from 'axios';

const useAPI = (url) => {
	const [data, setData] = useState({});
	const [pending, setPending] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		setTimeout(() => {
			axios.get(url)
			.then((response) => {
				console.log('response', response);
				setData(() => {return response.data});
				setPending(() => {return false;});
				setError(() => {
					return '';
				});
			})
			.catch((error) => {
				console.log('axios get error:', error);
				setError(() => {
					return error;
				});
				setPending(() => {return false;});
			});
		}, 1500);
	}, []);

	return {
		error,
		data,
		pending
	};

};

export default useAPI;