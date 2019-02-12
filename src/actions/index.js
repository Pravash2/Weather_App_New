import axios from "axios";

const API_KEY = "6028f96e52f3c38962b38fc58ada20fa";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const Url = `${ROOT_URL}&q=${city},ind`;
  const request = axios.get(Url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
