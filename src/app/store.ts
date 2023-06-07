import { configureStore } from "@reduxjs/toolkit";
import addUsersSlice from "./addSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    users: addUsersSlice,
    login: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
