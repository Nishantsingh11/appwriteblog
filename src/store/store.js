import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSclice";

const store = configureStore({
  reducer: {
    auth: authSlice
  }
});
export default store;
