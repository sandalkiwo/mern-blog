import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signinSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signinFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateStart: (state) => {
      (state.loading = true), (state.error = null);
    },
    updateSuccess: (state, action) => {
      (state.currentUser = action.payload),
        (state.loading = false),
        (state.error = null);
    },
    updateFailure: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    deleteUserstart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteUsersuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserfailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOutSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    }
  },
});

export const {
  signinStart,
  signinSuccess,
  signinFailure,
  updateStart,
  updateSuccess,
  updateFailure,
  deleteUserstart,
  deleteUsersuccess,
  deleteUserfailure,
  signOutSuccess
} = userSlice.actions;

export default userSlice.reducer;
