import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  eventId: "",
  username: "",
  reviewText: "",  
  userprofile: "",
  date: "",
  id: "",  
  rating: 0,  
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setDatareview: (state, action) => {
      state.eventId = action.payload.data.eventId;
      state.username = action.payload.data.username;
      state.userprofile = action.payload.data.userprofile;
      state.reviewText = action.payload.data.reviewText;  // Correct field name
      state.date = action.payload.data.date;
      state.id = action.payload.data.id;  // Assuming `id` is the review's `_id`
      state.rating = action.payload.data.rating;  // Added to handle the rating
    },
    clearReviewData: (state) => {
      state.eventId = "";
      state.username = "";
      state.userprofile = "";
      state.reviewText = "";
      state.date = "";
      state.id = "";
      state.rating = "";
    }
  },
});

export const { setDatareview, clearReviewData } = reviewSlice.actions;

export default reviewSlice.reducer;
