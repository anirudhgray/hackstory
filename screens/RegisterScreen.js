import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import AuthTabBar from '../components/AuthTabBar';
import tw from '../lib/tailwind';
import {TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from '@rneui/themed';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import axios from '../axios';
import {setUserInfo} from '../slices/AuthSlice';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [tourist, setTourist] = useState(true);

  const register = async () => {
    try {
      const res = await axios.post('/api/user/register', {
        email,
        password,
        name,
        tourist,
      });
      console.log(res.data);
      dispatch(
        setUserInfo({
          ...res.data,
        }),
      );
      Toast.show({
        type: 'success',
        text1: 'Badiya.',
        text2: 'Signed up successfully.',
      });
    } catch (e) {
      console.log(e);
      Toast.show({
        type: 'error',
        text1: 'This is awkward.',
        text2: 'Error',
      });
    }
  };

  return (
    <SafeAreaView style={tw`bg-white flex flex-col h-full relative p-5 px-8`}>
      {/* <Image
        style={{width: 25, height: 28, alignSelf: 'center', marginBottom: 5}}
        source={require('../assets/logoBlack.png')}
      /> */}
      <AuthTabBar />
      <View style={tw`grow`}>
        <TextInput
          placeholder="Dorian Gray"
          value={name}
          onChangeText={value => setName(value)}
          placeholderTextColor={'grey'}
          style={tw`px-4 text-black bg-highlight rounded-full`}
        />
        <TextInput
          placeholder="doriangray@painting.wall"
          value={email}
          onChangeText={value => setEmail(value)}
          placeholderTextColor={'grey'}
          style={tw`mt-5 text-black px-4 bg-highlight rounded-full`}
        />
        <SegmentedControl
          style={tw`mt-5 rounded-full text-black`}
          backgroundColor="#FFF0D9"
          tintColor="#FFD1B4"
          values={['Tourist', 'Native']}
          selectedIndex={tourist ? 0 : 1}
          fontStyle={{color: 'black'}}
          tabStyle={tw`rounded-full`}
          onChange={event => {
            setTourist(
              event.nativeEvent.selectedSegmentIndex === 1 ? false : true,
            );
          }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
          placeholderTextColor={'grey'}
          style={tw`mt-5 text-black mb-auto px-4 bg-highlight rounded-full`}
        />
        <Button
          buttonStyle={tw`bg-buttons rounded-full`}
          titleStyle={tw`text-black`}
          onPress={register}
          type="submit"
          title={'Sign Up'}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
