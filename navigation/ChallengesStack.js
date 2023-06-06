import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ChallengesScreen from '../screens/ChallengesScreen.js';
import {useWindowDimensions} from 'react-native';
import 'react-native-gesture-handler';
import ChallengesOneScreen from '../screens/ChallengesOneScreen.js';
import PuzzleChallenge from '../screens/PuzzleChallenge.js';
import LeaderboardScreen from '../screens/LeaderboardScreen.js';
import OtherProfile from '../screens/OtherProfile.js';
import UserPostsScreen from '../screens/UserPostsScreen.js';
import QuizChallengeScreen from '../screens/QuizChallengeScreen.js';

const Stack = createStackNavigator();

const ChallengesStack = () => {
  const navigatorOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
      <Stack.Screen
        name="ChallengesScreen"
        component={ChallengesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChallengesOneScreen"
        component={ChallengesOneScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PuzzleChallengeScreen"
        component={PuzzleChallenge}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LeaderboardScreen"
        component={LeaderboardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtherProfileScreen"
        component={OtherProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserPostsScreen"
        component={UserPostsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuizChallengeScreen"
        component={QuizChallengeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ChallengesStack;
