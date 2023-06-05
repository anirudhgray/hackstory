import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from '../screens/MapScreen';
import HomeStack from './HomeStack';
import ChallengesScreen from '../screens/ChallengesScreen';
const navigatorOptions = {
  headerShown: false,
};

const RootTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={navigatorOptions}>
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Challenges" component={ChallengesScreen} />
    </Tab.Navigator>
  );
};

export default RootTabs;
