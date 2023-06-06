import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import tw from '../lib/tailwind';
import axios from '../axios.js';
import Post from '../components/Post';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';

const UserPostsScreen = ({route}) => {
  const navigation = useNavigation();
  const {userPosts, name, tourist, _id} = route.params;
  console.log(userPosts);
  return (
    <View style={tw`bg-white h-screen`}>
      <Header title={'User Posts'} showHamburger />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`flex flex-row shrink mx-8 items-center mb-4`}>
        <Icon name="keyboard-arrow-left" type="MaterialIcons" />
        <Text style={tw`text-black`}>back</Text>
      </TouchableOpacity>
      <ScrollView style={tw`mx-auto mb-16`}>
        {userPosts.map((post, index) => {
          return (
            <Post
              caption={post.caption}
              tourist={tourist}
              userId={_id}
              name={name}
              image={post.image}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default UserPostsScreen;
