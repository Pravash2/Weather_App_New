import { FETCH_WEATHER } from "../actions/index.js";

export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_WEATHER":
      if (action.payload.request.status === 200)
        return [action.payload.data, ...state];
      else {
        alert("City not Found...Try another city");
      }
  }
  return state;
}
