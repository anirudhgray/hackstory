import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ChallengesScreen from '../screens/ChallengesScreen.js';
import {useWindowDimensions} from 'react-native';
import 'react-native-gesture-handler';
import ChallengesOneScreen from '../screens/ChallengesOneScreen.js';

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
    </Stack.Navigator>
  );
};

export default ChallengesStack;
