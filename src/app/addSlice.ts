import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Users = {
  id: string;
  name: string;
  age: string;
  profession: string;
};

type usersState = {
  list: Users[];
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
    addUsers(state, action: PayloadAction<Users>) {
      state.list.push({
        id: new Date().toISOString(),
        name: action.payload.name,
        age: action.payload.age,
        profession: action.payload.profession,
      });
    },
    removeUsers(state, action: PayloadAction<Users>) {
      state.list.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUsers, removeUsers } = addUsersSlice.actions;
export default addUsersSlice.reducer;
