import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import tw from '../lib/tailwind';
import {Input, Icon, Button} from '@rneui/themed';
import axios from '../axios';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {setUserInfo} from '../slices/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthTabBar from '../components/AuthTabBar';
import {TextInput} from 'react-native-gesture-handler';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const res = await axios.post('/api/user/login', {
        email,
        password,
      });
      console.log(res.data);
      dispatch(
        setUserInfo({
          ...res.data,
        }),
      );
      Toast.show({
        type: 'success',
        text1: 'Badiya.',
        text2: 'Logged in successfully.',
      });
    } catch (e) {
      console.log(e);
      Toast.show({
        type: 'error',
        text1: 'This is awkward.',
        text2: e,
      });
    }
  };

  return (
    <SafeAreaView style={tw`bg-white flex flex-col h-full relative p-5 px-8`}>
      {/* <Image
        style={{width: 37, height: 44, alignSelf: 'center', marginBottom: 5}}
        source={require('../assets/logoBlack.png')}
      /> */}
      <AuthTabBar login />
      <View style={tw`grow mt-5`}>
        <TextInput
          placeholder="doriangray@painting.wall"
          value={email}
          placeholderTextColor={'grey'}
          onChangeText={value => setEmail(value)}
          style={tw`px-4 text-black bg-highlight rounded-full`}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
          placeholderTextColor={'grey'}
          style={tw`mt-5 text-black mb-auto px-4 bg-highlight rounded-full`}
        />
        <Button
          buttonStyle={tw`bg-buttons rounded-full`}
          titleStyle={tw`text-black`}
          onPress={login}
          type="submit"
          title={'Login'}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
