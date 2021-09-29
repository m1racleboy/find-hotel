import { combineReducers } from "redux";
import hotelReducer from "./hotelReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  hotels: hotelReducer,
});
