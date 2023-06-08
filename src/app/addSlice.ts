import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/IUser";

type usersState = {
  list: IUser[];
};

const initialState: usersState = {
  list: [
    { id: "1", name: "Maksim", age: "29", profession: "WebDeveloper" },
    { id: "2", name: "Fill", age: "29", profession: "Creative person" },
    { id: "3", name: "Olga", age: "29", profession: "Creative person" },
    { id: "4", name: "Artem", age: "25", profession: "Student" },
  ],
};
const addUsersSlice = createSlice({
  name: "addUsers",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.list.push({
        id: new Date().toISOString(),
        name: action.payload.name,
        age: action.payload.age,
        profession: action.payload.profession,
      });
    },
    removeUser(state, action: PayloadAction<string>) {
      state.list = state.list.filter((user) => user.id !== action.payload);
    },
    editUser(state, action: PayloadAction<IUser | object | string| any>) {
      state.list[action.payload.id -1] = action.payload;
    },
  },
});

export const { addUser, removeUser, editUser } = addUsersSlice.actions;
export default addUsersSlice.reducer;
