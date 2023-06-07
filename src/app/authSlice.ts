import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isLoggined: localStorage.getItem("isLoggined") === "true",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggined = true;
      localStorage.setItem("isLoggined", 'true');
    },
    logOut: (state, action) => {
        state.isLoggined = false;
        localStorage.setItem('isLoggined', 'false');
      }
  },
});
export const {logIn, logOut} = authSlice.actions;
export default authSlice.reducer;