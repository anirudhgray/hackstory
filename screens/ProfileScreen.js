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
      <View style={tw`px-5 mt-5`}>
        <Text style={tw`text-2xl text-black`}>Hi, {user && user.name}.</Text>
        <Text style={tw`text-slate-400`}>{user && user.email}</Text>
        <Text style={tw`text-slate-400`}>Points: {user && user.points}</Text>
        <Text
          style={tw.style(
            'text-black px-3 py-2 mb-5 bg-blue-100 rounded-full mt-3',
            {
              width: 80,
            },
          )}>
          {user && (user.tourist ? 'Tourist' : 'Native')}
        </Text>
        <Text style={tw`text-black`}>Your Completed Challenges</Text>
        <View style={tw`grow mb-18 mt-3 mt-5`}>
          {user &&
            user.completedChallenges.map(item => {
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
        </View>
        <Button
          onPress={submitLogout}
          style={tw`mt-4 rounded-xl`}
          color={'red'}
          title="Logout"
        />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
