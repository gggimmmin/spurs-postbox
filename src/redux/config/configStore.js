import { configureStore } from "@reduxjs/toolkit";
import letterSlice from "../modules/letterSlice";
import memberSlice from "../modules/memberSlice";

// const rootReducer = combineReducers({
//   letterSlice,
//   memberSlice,
// });

const store = configureStore({
  reducer: { letterSlice, memberSlice },
});

export default store;
