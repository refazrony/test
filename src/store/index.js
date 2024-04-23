import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeConfigSlice from "./themeConfigSlice";

export const rootReducer = combineReducers({
  themeConfig: themeConfigSlice,
});

export default configureStore({
  reducer: rootReducer,
});
