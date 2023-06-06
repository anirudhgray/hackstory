import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import tw from '../lib/tailwind';
import axios from '../axios.js';
import Post from '../components/Post';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';

const AllPostsScreen = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('/api/post/all');
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <View style={tw`bg-white h-screen flex flex-col`}>
      <Header title={'Home'} showHamburger showFilter />
      <ScrollView style={tw`mx-auto mb-16`}>
        {posts.map((post, index) => {
          return (
            <Post
              caption={post.caption}
              tourist={post.user.tourist}
              userId={post.user._id}
              name={post.user.name}
              image={post.image}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default AllPostsScreen;
