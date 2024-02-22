import { configureStore } from "@reduxjs/toolkit";
import letter from "@redux/modules/letterSlice";
import member from "@redux/modules/memberSlice";

const store = configureStore({
  reducer: { letter, member },
});

export default store;
