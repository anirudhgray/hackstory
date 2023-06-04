import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import tw from '../lib/tailwind';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const HomeScreen = () => {
  useEffect(() => {
    const gettest = async () => {
      const tests = await firestore().collection('testdata').get();
      console.log(tests);
    };
    gettest();
  }, []);
  return (
    <SafeAreaView style={tw`bg-white dark:bg-black h-full relative`}>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
