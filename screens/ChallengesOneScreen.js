import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import tw from '../lib/tailwind';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import axios from '../axios.js';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const ChallengesOneScreen = () => {
  const [challenges, setChallenges] = useState([]);
  const navigation = useNavigation();

  const fetchChallenges = async () => {
    try {
      const res = await axios.get('/api/challenge/all');
      setChallenges(res.data);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong.',
        text2: error,
      });
    }
  };

  useEffect(() => {
    fetchChallenges();
  }, []);
  return (
    <View style={tw`bg-white h-screen flex flex-col`}>
      <Header title={'Challenges'} showHamburger />
      <TouchableOpacity
        onPress={() => navigation.navigate('ChallengesScreen')}
        style={tw`flex flex-row shrink mx-8 items-center`}>
        <Icon name="keyboard-arrow-left" type="MaterialIcons" />
        <Text style={tw`text-black`}>back</Text>
      </TouchableOpacity>
      <Text style={tw`text-black px-8 mt-5`}>
        #1 You'll be given part of a photo of an iconic Delhi location — find
        that place while exploring, and upload a snap of it to get points and
        goodies!
      </Text>
      <ScrollView style={tw`grow mb-18 mt-3 mt-5`}>
        {challenges.map(item => {
          return (
            <TouchableOpacity
              key={item._id}
              style={tw`bg-white p-2 mx-10 my-4 shadow-shadow shadow-xl items-center rounded-xl`}>
              {item.image && (
                <Image
                  style={{width: 150, height: 150, margin: 20}}
                  source={{
                    uri: `data:image/png;base64,${item.image}`,
                  }}
                />
              )}
              <Text style={tw`text-black flex-wrap`}>{item.title}</Text>
              {item.clue && (
                <Text style={tw`mt-3 text-black flex-wrap`}>
                  Clue: {item.clue}
                </Text>
              )}
              {item.region && (
                <Text style={tw`mt-3 text-black flex-wrap`}>
                  Region: {item.region}
                </Text>
              )}
              <Text style={tw`mt-3 text-black flex-wrap`}>
                Points: {item.points}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ChallengesOneScreen;
