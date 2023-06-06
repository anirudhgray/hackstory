import {View, Text, TouchableOpacity, useWindowDimensions} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import tw from '../lib/tailwind';

const QuizChallengeScreen = () => {
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white h-screen`}>
      <Header title={'Quiz'} showHamburger />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`flex flex-row shrink mx-8 items-center`}>
        <Icon name="keyboard-arrow-left" type="MaterialIcons" />
        <Text style={tw`text-black`}>back</Text>
      </TouchableOpacity>
      <View style={tw`flex flex-wrap flex-row`}></View>
    </View>
  );
};

export default QuizChallengeScreen;
