import {View, Text, Image} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const AuthTabBar = ({login}) => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex flex-row w-screen justify-evenly pr-16 mb-10`}>
      <View style={tw`grow`}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View
            style={tw`relative grow pt-5 pb-10 border-b border-black ${
              login ? 'border-solid' : 'border-dashed'
            }`}>
            <Text style={tw`text-black text-center`}>Login</Text>
            {login ? (
              <Image
                style={tw`absolute bottom-0`}
                source={require('../assets/metro.png')}
              />
            ) : null}
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw`grow`}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <View
            style={tw`relative grow pt-5 pb-10 border-b border-black ${
              !login ? 'border-solid' : 'border-dashed'
            }`}>
            <Text style={tw`text-black text-center`}>Sign Up</Text>

            {!login ? (
              <Image
                style={tw`absolute bottom-0`}
                source={require('../assets/metro.png')}
              />
            ) : null}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthTabBar;
