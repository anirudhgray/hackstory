import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
// import Metro from '../assets/metro.svg';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex flex-col h-full relative p-12`}>
      <Image style={tw`absolute ml-6`} source={require('../assets/blob.png')} />
      <Text style={tw`text-xl mb-3 mt-8 text-black`}>Welcome,</Text>
      <Text style={tw`text-black mb-10`}>
        Discover the vibrant tapestry of Delhi, where history meets modernity.
        Get ready to explore Delhi like never before! kyuki bro, dilli ek vibe
        hai.
      </Text>
      <View style={tw`grow`}>
        <TouchableOpacity onPress={() => navigation.push('Auth')}>
          <View
            style={tw`relative grow pt-5 border-b border-black border-solid`}>
            <Text style={tw`text-right`}>Enter</Text>
            <Image
              style={tw`absolute bottom-0`}
              source={require('../assets/metroLarge.png')}
            />
            {/* <Metro width={200} height={50} /> */}
          </View>
        </TouchableOpacity>
      </View>
      <Image
        style={tw`absolute bottom-0 w-screen`}
        source={require('../assets/indiagate.png')}
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
