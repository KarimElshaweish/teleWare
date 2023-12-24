import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { thunk } from "redux-thunk";

const middlewareList = [thunk, logger];

const store = configureStore({
  reducer: rootReducer,
  middleware: () => middlewareList,
});

export default store;
