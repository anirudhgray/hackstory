import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {setType} = authSlice.actions;

export default authSlice.reducer;
