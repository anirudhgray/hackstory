import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import Header from '../components/Header';
import {useDeviceContext} from 'twrnc';
import {useAppColorScheme} from 'twrnc';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ChallengesScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white h-screen`}>
      <Header title={'Challenges'} showHamburger />
      {/* <Text>ChallengesScreen</Text> */}
      <TouchableOpacity style={tw`mx-10 py-2 bg-buttons rounded-xl`}>
        <Text style={tw`text-center text-black`}>Leaderboard</Text>
      </TouchableOpacity>
      <ScrollView style={tw`mx-6 mt-5 mb-24`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChallengesOneScreen')}
          style={tw`flex bg-white m-4 shadow-shadow shadow-xl items-center flex-row h-24 rounded-xl`}>
          <View>
            <Image
              style={{
                flex: 1,
                resizeMode: 'contain',
                width: 100,
                borderBottomLeftRadius: 12,
                borderTopLeftRadius: 12,
              }}
              lay
              source={require('../assets/indiagate.png')}
            />
          </View>
          <View style={tw`p-2 flex shrink flex-row`}>
            <Text style={tw`text-black flex-1 flex-wrap`}>
              #1 You'll be given part of a photo of an iconic Delhi location...
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex bg-white m-4 shadow-shadow shadow-xl items-center flex-row h-24 rounded-xl`}>
          <View>
            <Image
              style={{
                flex: 1,
                resizeMode: 'contain',
                width: 100,
                borderBottomLeftRadius: 12,
                borderTopLeftRadius: 12,
              }}
              lay
              source={require('../assets/metroLarge.png')}
            />
          </View>
          <View style={tw`p-2 flex shrink flex-row`}>
            <Text style={tw`text-black flex-1 flex-wrap`}>
              #2 Quizzes and Polls! What's not to love /s
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={tw`text-black text-center mt-10`}>More to come!</Text>
      </ScrollView>
    </View>
  );
};

export default ChallengesScreen;
