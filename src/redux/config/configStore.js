import { configureStore } from "@reduxjs/toolkit";
import letters from "@redux/modules/letterSlice";
import member from "@redux/modules/memberSlice";
import auth from "@redux/modules/authSlice";

const store = configureStore({
  reducer: { letters, member, auth },
});

const getStore = () => store;
export default getStore;
