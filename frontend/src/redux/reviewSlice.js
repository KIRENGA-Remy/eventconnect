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
      state.eventId = action.payload.eventId;
      state.username = action.payload.username;
      state.userprofile = action.payload.userprofile;
      state.reviewText = action.payload.reviewText;  // Correct field name
      state.date = action.payload.date;
      state.id = action.payload.id;  // Assuming `id` is the review's `_id`
      state.rating = action.payload.rating;  // Added to handle the rating
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
