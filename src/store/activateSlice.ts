import { createSlice } from "@reduxjs/toolkit";

export type TActivateState = typeof initialState;
const initialState = {
  name: "",
  avatar: "defaultprofile.jpg",
};

export const activateSlice = createSlice({
  name: "activate",
  initialState,
  reducers: {
    setName: (currentState, action) => {
      const { name } = action.payload;
      currentState.name = name;
    },
    setAvatar: (currentState, action) => {
      const { avatar } = action.payload;
      currentState.avatar = avatar;
    },
  },
});

export const { setName, setAvatar } = activateSlice.actions;
export default activateSlice.reducer;
