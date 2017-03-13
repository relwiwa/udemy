import axios from 'axios';

import API_KEYS from '../api-keys';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEYS.openWeatherMapKey}`;

// Make sure action type are in sync between actions and reducers
// by declaring constant, using and exporting it to be imported by
// reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);

  // - Promise gets returned as the payload
  // - react-redux middleware will stop initial action and upon
  //   promise resolves, creates new action of same type and sends
  //   it to reducer with data received
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}