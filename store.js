import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from './slices/AuthSlice.js';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
