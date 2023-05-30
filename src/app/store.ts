import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import  addUsersSlice from "./addSlice";

export const store = configureStore({
  reducer: {
    users: addUsersSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

