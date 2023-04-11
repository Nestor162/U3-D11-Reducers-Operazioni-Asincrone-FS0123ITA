import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../reducers";

const store = configureStore({
  reducer: favoriteReducer
});

export default store;
