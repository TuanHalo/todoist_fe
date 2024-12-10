import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  id: string;
  name: string;
  email: string;
}

const initialState: UserState = {
  id: "",
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
