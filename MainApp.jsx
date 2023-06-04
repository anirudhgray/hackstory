import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
// import HomeScreen from './screens/HomeScreen';
// import OtherScreen from './screens/OtherScreen';
import {store} from './store';
import {useAppColorScheme} from 'twrnc';
import tw from './lib/tailwind';
import {useDeviceContext} from 'twrnc';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {useSelector, useDispatch} from 'react-redux';

import HomeStack from './navigation/HomeStack';
import AuthStack from './navigation/AuthStack';
import ChallengesScreen from './screens/ChallengesScreen';
import ProfileScreen from './screens/ProfileScreen';
// import {initialiseStore} from './slices/AuthSlice';

function MainApp() {
  useDeviceContext(tw);
  // const [colorScheme] = useAppColorScheme(tw);

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const navigatorOptions = {
    headerShown: false,
  };

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(initialiseStore());
  // }, [dispatch]);

  const auth = useSelector(state => {
    return state.auth;
  });

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {auth && auth.token ? (
          <Tab.Navigator screenOptions={navigatorOptions}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Challenges" component={ChallengesScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator screenOptions={navigatorOptions}>
            <Stack.Screen name="Auth" component={AuthStack} />
          </Stack.Navigator>
        )}
        {/* <StatusBar
            // backgroundColor={colorScheme === 'dark' ? 'black' : 'white'}
            // barStyle={'dark-content'}
          /> */}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default MainApp;
