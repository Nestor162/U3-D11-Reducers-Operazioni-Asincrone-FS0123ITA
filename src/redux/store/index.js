import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favoritesReducer";
import resultReducer from "../reducers/jobsReducer";

const mainReducer = combineReducers({
  favorites: favoritesReducer,
  results: resultReducer
});

const store = configureStore({
  reducer: mainReducer
});

export default store;
