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
      <TouchableOpacity
        onPress={() => navigation.navigate('LeaderboardScreen')}
        style={tw`mx-10 py-2 rounded-xl`}>
        <Text style={styles.laila}>Leaderboard</Text>
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
          <View style={tw`p-2 flex flex-col shrink`}>
            <Text style={tw`font-semibold text-black flex-1 flex-wrap`}>
              #1 Beyond The Frame
            </Text>
            <Text style={tw`text-black flex-1 flex-wrap text-black`}>
              You'll be given part of a photo of an iconic Delhi location...
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('QuizChallengeScreen')}
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
          <View style={tw`p-2 flex shrink flex-col`}>
            <Text style={tw`font-semibold text-black flex-1 flex-wrap`}>
              #2 Quiz Khaas
            </Text>
            <Text style={tw`text-black flex-1 flex-wrap text-black`}>
              Quiz out questions ranging from Delhi basics...
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={tw`text-black text-center mt-10`}>More to come!</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  laila: {
    fontFamily: 'Laila-Regular',
    color: 'black',
    fontSize: 15,
    fontWeight: 500,
    alignSelf: 'flex-end',
  },
});

export default ChallengesScreen;
