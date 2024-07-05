import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {}
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      console.log(action.payload.data);
      state.user = action.payload.data;  // Use action.payload directly
    },
    logoutRedux: (state) => {
      state.user = {};  // Reset user object
    },
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;

export default userSlice.reducer;
