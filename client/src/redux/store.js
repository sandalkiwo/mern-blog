import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/userSLice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
