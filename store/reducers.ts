import { combineReducers } from "redux";
import { LocationReducer } from "../home/location";
import { CurrancyReducer } from "../currancy/state";

export default combineReducers({
  location: LocationReducer,
  currany: CurrancyReducer,
});
