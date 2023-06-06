import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import tw from '../lib/tailwind';
import axios from '../axios.js';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';

const LeaderboardScreen = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const res = await axios.get('/api/user/all');
      let u = res.data;
      console.log(u, res.data);
      u.sort((a, b) => {
        return b.points - a.points;
      });
      setUsers(u);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <View style={tw`bg-white h-screen`}>
      <Header title={'Leaderboard'} showHamburger />
      <TouchableOpacity
        onPress={() => navigation.navigate('ChallengesScreen')}
        style={tw`flex flex-row shrink mx-8 items-center`}>
        <Icon name="keyboard-arrow-left" type="MaterialIcons" />
        <Text style={tw`text-black`}>back</Text>
      </TouchableOpacity>
      <View style={tw`mx-8 mt-4`}>
        {users.map((user, index) => {
          if (index > -1) {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('OtherProfileScreen', {...user})
                }
                style={tw`p-5 mb-3 rounded-xl bg-white shadow-shadow shadow-xl flex flex-row items-center`}>
                <Text style={tw`text-xl mr-4 text-black`}>{index + 1}</Text>
                <Image
                  style={{height: 40, width: 40}}
                  source={require('../assets/emily.png')}
                />
                <Text style={tw`ml-4 text-black`}>{user.name}</Text>
              </TouchableOpacity>
            );
          }
        })}
      </View>
    </View>
  );
};

export default LeaderboardScreen;
