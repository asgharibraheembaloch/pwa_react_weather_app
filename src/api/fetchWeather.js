import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '6462e3dc4cc5888315a2f7fe9a2eea94'
export const fetchWeather = async (query) => {
    const data = await axios.get(URL,{
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    })
    return data
}