import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen.js';
import {useWindowDimensions} from 'react-native';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const HomeStack = () => {
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
    <Stack.Navigator screenOptions={navigatorOptions}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
