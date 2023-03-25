import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authslice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
