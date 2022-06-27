const API_KEY = '52d6d90f28befa7b5b731389c5388b81';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export function fetchCurrentWeather(lat: number, lon: number) {
	return fetch(
		`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
	).then((response) => response.json());
}
