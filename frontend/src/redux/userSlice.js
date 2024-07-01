import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "",
  username: "",
  _id: ""
};


export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    loginRedux : (state, action) =>  { 
      console.log(action.payload.data); 
        //  state.user = action.payload.data; 
         state._id = action.payload.data._id;  
         state.email = action.payload.data.email; 
         state.username = action.payload.data.username; 
        },
    logoutRedux(state, action) {
      state._id = "";
      state.fullName = "";
      state.email = "";
      state.username = "";
    },
  },
});

export const { loginRedux ,logoutRedux} = userSlice.actions;

export default userSlice.reducer;
