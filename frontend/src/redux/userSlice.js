import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
fullName : "",
phoneNumber : "",
username : "",
userprofile: "",
id : "",
email : "" 
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      // console.log(action.payload.data);
      // state.user = action.payload.data;  // Use action.payload directly
      state.fullName = action.payload.data.fullName
      state.email = action.payload.data.email
      state.phoneNumber = action.payload.data.phoneNumber
      state.userprofile = action.payload.data.userprofile
      state.id = action.payload.data.id
      state.username = action.payload.data.username
    },
    logoutRedux: (state) => {
      state.fullName = ""
      state.email = ""
      state.phoneNumber = ""
      state.userprofile = ""
      state.id = ""
      state.username = ""
    },
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;

export default userSlice.reducer;
