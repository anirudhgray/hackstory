import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    name: '',
    email: '',
  },
  reducers: {
    initialiseStore: state => {
      if (AsyncStorage.getItem('token')) {
        state.token = AsyncStorage.getItem('token');
        state.name = AsyncStorage.getItem('name');
        state.email = AsyncStorage.getItem('email');
      } else {
        state.token = '';
        state.name = '';
        state.email = '';
      }
    },
    setUserInfo: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
    },
    logout: state => {
      if (AsyncStorage.getItem('token')) {
        AsyncStorage.removeItem('token');
      }
      if (AsyncStorage.getItem('admin')) {
        AsyncStorage.removeItem('admin');
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {initialiseStore, setUserInfo, logout} = authSlice.actions;

export default authSlice.reducer;
