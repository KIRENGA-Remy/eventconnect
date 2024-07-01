import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./userSlice";
import eventSlideReducer from "./eventSlide";

export const store = configureStore({
  reducer: { 
    user : userSlice
    // event : eventSlideReducer
    
  },
});
