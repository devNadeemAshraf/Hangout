import { createSlice } from "@reduxjs/toolkit";

export type TAuthState = typeof initialState;
const initialState = {
  isAuth: false,
  user: {
    _id: "",
    name: "",
    avatar: "",
    phone: "",
    activated: false,
    createdAt: "",
  },
  otp: {
    phone: "",
    hash: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (currentState, action) => {
      currentState.isAuth = action.payload;
    },
    setUser: (currentState, action) => {
      const { user } = action.payload;
      currentState.user = user;
    },
    setOtp: (currentState, action) => {
      const { phone, hash } = action.payload;
      currentState.otp.phone = phone;
      currentState.otp.hash = hash;
    },
  },
});

export const { setAuth, setUser, setOtp } = authSlice.actions;
export default authSlice.reducer;
