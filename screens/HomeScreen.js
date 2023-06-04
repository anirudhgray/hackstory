import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import tw from '../lib/tailwind';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white dark:bg-black h-full relative`}>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
