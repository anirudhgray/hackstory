import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import AuthTabBar from '../components/AuthTabBar';
import tw from '../lib/tailwind';

const RegisterScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full relative p-5`}>
      <View>
        <AuthTabBar />
        <Text>RegisterScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
