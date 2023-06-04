import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import 'react-native-gesture-handler';
import LoginScreen from '../screens/LoginScreen.js';
import RegisterScreen from '../screens/RegisterScreen.js';
import tw from '../lib/tailwind.js';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthStack = () => {
  const {height, width} = useWindowDimensions();
  const navigatorOptions = {
    headerShown: false,
    // cardStyle: {backgroundColor: 'transparent'},
    cardStyleInterpolator: ({current: {progress}}) => ({
      cardStyle: {
        transform: [
          {
            translateX: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [height, 0],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
          extrapolate: 'clamp',
        }),
      },
    }),
  };

  return (
    <Stack.Navigator screenOptions={navigatorOptions}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        // options={{headerShown: true}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        // options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
