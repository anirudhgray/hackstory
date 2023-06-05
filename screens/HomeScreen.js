import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import tw from '../lib/tailwind';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full relative`}>
      <Header title="Explore" showHamburger />
      <View>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
