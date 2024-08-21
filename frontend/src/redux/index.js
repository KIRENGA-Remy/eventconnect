import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./userSlice";
import eventSlideReducer from "./eventSlide";
import reviewSlice from './reviewSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    event: eventSlideReducer,
    review: reviewSlice
  },
});
