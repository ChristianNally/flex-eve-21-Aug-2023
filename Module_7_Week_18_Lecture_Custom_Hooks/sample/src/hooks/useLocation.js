import {useState, useEffect} from 'react';

const useLocation = () => {
	const [location, setLocation] = useState({lat: 0, lon: 0});

	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition((result) => {
			console.log('result', result);
			setLocation((prev) => {
				return {
					lat: result.coords.latitude,
					lon: result.coords.longitude
				}
			});
		});
	}, []);

	return {
		location
	};

};

export default useLocation;