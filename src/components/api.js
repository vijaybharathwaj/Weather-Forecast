import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/forecast';
const API_KEY = '453bb7ec5d9e1239f27a72f77b2124c6';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}