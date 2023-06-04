import {View, Text, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import tw from '../lib/tailwind';

const LoginScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white dark:bg-black h-full relative p-5`}>
      <View>
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
