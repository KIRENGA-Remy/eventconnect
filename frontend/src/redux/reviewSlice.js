import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
username : "",
Comment : "",
userprofile: "",
date: "",
id : ""
};

export const userSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setDatareview: (state, action) => {
      state.username = action.payload.data.username
      state.userprofile = action.payload.data.userprofile
      state.comment = action.payload.data.comment
      state.date = action.payload.data.date
      state.id = action.payload.data.id
    }
}
});

export const { setDatareview } = userSlice.actions;

export default userSlice.reducer;
