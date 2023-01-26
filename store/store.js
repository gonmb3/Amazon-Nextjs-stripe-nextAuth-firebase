import { configureStore } from '@reduxjs/toolkit'
import { basketSlice } from '@/slices/basketSlice';

export const store = configureStore({
  reducer:{
    basket: basketSlice.reducer,
  }
})
