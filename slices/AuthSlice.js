import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    name: '',
    email: '',
    type: '',
  },
  reducers: {
    // initialiseStore: async state => {
    //   if (await AsyncStorage.getItem('token')) {
    //     state.token = await AsyncStorage.getItem('token');
    //     state.name = await AsyncStorage.getItem('name');
    //     state.email = await AsyncStorage.getItem('email');
    //     state.tourist = await AsyncStorage.getItem('tourist');
    //   } else {
    //     state.token = '';
    //     state.name = '';
    //     state.email = '';
    //     state.tourist = '';
    //   }
    // },
    setUserInfo: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.tourist = action.payload.user.tourist ? 'Tourist' : 'Native';
    },
    logout: state => {
      state.token = '';
      state.email = '';
      state.name = '';
      state.type = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUserInfo, logout} = authSlice.actions;

export default authSlice.reducer;
