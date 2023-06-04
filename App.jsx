import React from 'react';
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

import HomeStack from './navigation/HomeStack';
import LoginScreen from './screens/LoginScreen';

function App() {
  useDeviceContext(tw);
  const [colorScheme] = useAppColorScheme(tw);

  const Tab = createBottomTabNavigator();

  const navigatorOptions = {
    headerShown: false,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Tab.Navigator screenOptions={navigatorOptions}>
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Home" component={HomeStack} />
          </Tab.Navigator>
          <StatusBar
            backgroundColor={colorScheme === 'dark' ? 'black' : 'white'}
            barStyle={'dark-content'}
          />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
