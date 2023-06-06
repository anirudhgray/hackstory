import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import tw from '../lib/tailwind';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';

const OtherProfile = ({route}) => {
  const {_id, name, points, completedChallenges, userPosts, tourist} =
    route.params;
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white h-screen`}>
      <Header title={'Profile'} showHamburger />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`flex flex-row shrink mx-8 items-center`}>
        <Icon name="keyboard-arrow-left" type="MaterialIcons" />
        <Text style={tw`text-black`}>back</Text>
      </TouchableOpacity>
      <View style={tw`mx-8 mt-4 flex flex-col items-center`}>
        <Image source={require('../assets/emily.png')} />
        <Text style={tw`mt-4 text-lg text-black`}>{name}</Text>
        <Text style={tw`mt-4 text-sm text-black`}>
          {tourist ? 'Tourist' : 'Native'}
        </Text>
        <View style={tw`flex flex-row items-center`}>
          <Image
            style={tw`mt-5 mr-3`}
            source={require('../assets/level.png')}
          />
          <View>
            <Text style={tw`mt-4 text-lg text-center text-black`}>
              {points}
            </Text>
            <Text style={tw`text-xs text-black`}>Total Points</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('UserPostsScreen', {
              userPosts,
              name,
              tourist,
              _id,
            })
          }
          style={tw`w-full p-4 rounded-xl mt-18 bg-white shadow-shadow shadow-2xl`}>
          <Text style={tw`text-black`}>Posts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtherProfile;
