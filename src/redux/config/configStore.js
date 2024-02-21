import { combineReducers, configureStore } from "@reduxjs/toolkit";
import letters from "../modules/letters";
import member from "../modules/member";

const rootReducer = combineReducers({
  letters,
  member,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
