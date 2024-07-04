import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./userSlice";
// import eventSlideReducer from "./eventSlide"; // Uncomment if needed

export const store = configureStore({
  reducer: {
    user: userSlice,
    // event: eventSlideReducer, // Uncomment if needed
  },
});
