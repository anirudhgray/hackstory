import {View, Text, Image} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const AuthTabBar = ({login}) => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex flex-row w-screen justify-evenly pr-10 mb-10`}>
      <View
        style={tw`relative grow pt-5 pb-10 border-b border-black ${
          login ? 'border-solid' : 'border-dashed'
        }`}>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Text style={tw`text-center`}>Login</Text>
        </TouchableOpacity>
        {login ? (
          <Image
            style={tw`absolute bottom-0`}
            source={require('../assets/metro.png')}
          />
        ) : null}
      </View>
      <View
        style={tw`relative grow pt-5 pb-10 border-b border-black ${
          !login ? 'border-solid' : 'border-dashed'
        }`}>
        <TouchableOpacity onPress={() => navigation.push('Register')}>
          <Text style={tw`text-center`}>Register</Text>
        </TouchableOpacity>
        {!login ? (
          <Image
            style={tw`absolute bottom-0`}
            source={require('../assets/metro.png')}
          />
        ) : null}
      </View>
    </View>
  );
};

export default AuthTabBar;
