import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from '../screens/MapScreen';
import HomeStack from './HomeStack';
import ChallengesScreen from '../screens/ChallengesScreen';
import ChallengesStack from './ChallengesStack';
const navigatorOptions = {};
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Icon} from '@rneui/themed';
import AllPostsScreen from '../screens/AllPostsScreen';

const RootTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'map';
          } else if (route.name === 'Challenges') {
            iconName = 'package';
          }

          // You can return any component that you like here!
          return (
            <Icon name={iconName} size={size} color={color} type="feather" />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      {/* <Tab.Screen name="Map" component={MapScreen} /> */}
      <Tab.Screen name="Home" component={AllPostsScreen} />
      <Tab.Screen name="Explore" component={HomeStack} />
      <Tab.Screen name="Challenges" component={ChallengesStack} />
    </Tab.Navigator>
  );
};

export default RootTabs;
