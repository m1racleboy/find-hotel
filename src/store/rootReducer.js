import { combineReducers } from "redux";
import hotelReducer from "./reducers/hotelReducer";
import userReducer from "./reducers/userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  hotel: hotelReducer,
});
