import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import {useSelector} from 'react-redux';
import {Button, Chip} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {logout} from '../slices/AuthSlice';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import Header from '../components/Header';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const submitLogout = () => {
    dispatch(logout());
    Toast.show({
      type: 'success',
      text1: 'Phir milte hain.',
    });
  };
  const user = useSelector(state => state.auth);
  return (
    <SafeAreaView style={tw`bg-white h-full relative`}>
      <Header title="Your Profile" />
      <View style={tw`p-5`}>
        <Text style={tw`text-2xl text-black`}>Hi, {user.name}.</Text>
        <Text style={tw`text-slate-400`}>{user.email}</Text>
        <Text
          style={tw.style('px-3 py-2 mb-5 bg-blue-100 rounded-full mt-3', {
            width: 80,
          })}>
          {user.tourist}
        </Text>
        <Button
          onPress={submitLogout}
          style={tw`mt-4 rounded-xl`}
          color={'red'}
          title="Logout"
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
