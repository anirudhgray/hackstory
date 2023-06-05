import {View, Text} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import Header from '../components/Header';
import {useDeviceContext} from 'twrnc';
import {useAppColorScheme} from 'twrnc';
import {useColorScheme} from 'react-native';

const ChallengesScreen = () => {
  return (
    <View style={tw`bg-white h-screen`}>
      <Header title={'Challenges'} showHamburger />
      <Text>ChallengesScreen</Text>
    </View>
  );
};

export default ChallengesScreen;
