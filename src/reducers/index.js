import { combineReducers } from "redux";
import reducerWeather from "./reducerWeather";

const rootReducer = combineReducers({
  weather: reducerWeather
});

export default rootReducer;
