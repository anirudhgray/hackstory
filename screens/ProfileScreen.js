import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from '../lib/tailwind';
import {useSelector} from 'react-redux';
import {Button, Chip} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {logout} from '../slices/AuthSlice';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import axios from '../axios.js';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const submitLogout = () => {
    dispatch(logout());
    Toast.show({
      type: 'success',
      text1: 'Phir milte hain.',
    });
  };
  const auth = useSelector(state => state.auth);
  const [user, setUser] = useState();
  const fetchUser = async () => {
    try {
      const res = await axios.get('/api/user', {
        headers: {
          authorization: auth.token,
        },
      });
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (auth) fetchUser();
  }, [auth]);

  return (
    <ScrollView style={tw`bg-white h-full relative`}>
      <Header title="Your Profile" />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`flex flex-row shrink mx-8 items-center`}>
        <Icon name="keyboard-arrow-left" type="MaterialIcons" />
        <Text style={tw`text-black`}>back</Text>
      </TouchableOpacity>
      <View style={tw`mx-8 mt-4 grow flex flex-col items-center`}>
        <Image source={require('../assets/emily.png')} />
        <Text style={tw`mt-4 text-lg text-black`}>{user && user.name}</Text>
        <Text style={tw`mt-4 text-sm text-black`}>
          {user && (user.tourist ? 'Tourist' : 'Native')}
        </Text>
        <View style={tw`flex flex-row items-center`}>
          <Image
            style={tw`mt-5 mr-3`}
            source={require('../assets/level.png')}
          />
          <View>
            <Text style={tw`mt-4 text-lg text-center text-black`}>
              {user && user.points}
            </Text>
            <Text style={tw`text-xs text-black`}>Total Points</Text>
          </View>
        </View>
        {user && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('UserChallengesScreen', {
                ...user,
              })
            }
            style={tw`w-full p-4 rounded-xl mt-16 bg-white shadow-shadow shadow-lg`}>
            <Text style={tw`text-black`}>Challenges Completed</Text>
          </TouchableOpacity>
        )}
        {user && (
          <TouchableOpacity
            style={tw`w-full p-4 rounded-xl mt-5 bg-white shadow-shadow shadow-lg`}>
            <Text style={tw`text-black`}>Rewards</Text>
          </TouchableOpacity>
        )}
        {user && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('UserPostsScreen', {
                ...user,
              })
            }
            style={tw`w-full p-4 rounded-xl mt-5 mb-10 bg-white shadow-shadow shadow-lg`}>
            <Text style={tw`text-black`}>Your Posts</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
