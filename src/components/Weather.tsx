import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchCurrentWeather } from '../api';

interface ILocation {
	lat: number;
	lon: number;
}

function Weather() {
	const [location, setLocation] = useState({ lat: 0, lon: 0 });

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((location) => {
			const { latitude, longitude } = location.coords;
			console.log(latitude, longitude);
			setLocation({ lat: latitude, lon: longitude });
		});
	}, []);

	// useEffect(() => {
	// 	navigator.geolocation.getCurrentPosition(
	// 		(location) => {
	// 			const { latitude, longitude } = location.coords;
	// 			console.log(latitude, longitude);
	// 			const { isLoading, data } = useQuery('currentWeather', () =>
	// 				fetchCurrentWeather(latitude, longitude)
	// 			);

	// 			console.log(isLoading, data);
	// 		},
	// 		(error) => {
	// 			console.log(error);
	// 		}
	// 	);
	// }, []);
	return <div>hi</div>;
}

export default Weather;
