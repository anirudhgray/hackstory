import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import 'react-native-gesture-handler';
import LoginScreen from '../screens/LoginScreen.js';
import RegisterScreen from '../screens/RegisterScreen.js';

const Tab = createMaterialTopTabNavigator();

const AuthStack = () => {
  const {height} = useWindowDimensions();
  const navigatorOptions = {
    headerShown: false,
    cardStyle: {backgroundColor: 'transparent'},
    cardStyleInterpolator: ({current: {progress}}) => ({
      cardStyle: {
        transform: [
          {
            translateY: progress.interpolate({
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
    <Tab.Navigator screenOptions={navigatorOptions}>
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: true}}
      />
      <Tab.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: true}}
      />
    </Tab.Navigator>
  );
};

export default AuthStack;
