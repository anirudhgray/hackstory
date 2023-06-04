import {View, Text, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import tw from '../lib/tailwind';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '907336710962-0m37buop58gjbtciqsega4g0h10mm896.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={tw`bg-white dark:bg-black h-full relative`}>
      <View>
        <Text>Login {userInfo.name}</Text>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
          // disabled={this.state.isSigninInProgress}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
