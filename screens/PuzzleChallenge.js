import {
  View,
  Text,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import tw from '../lib/tailwind';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import axios from '../axios.js';
import {useSelector} from 'react-redux';

const PuzzleChallenge = ({route}) => {
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Pancho Delhi Aa',
          message:
            'We need to check your location' + ' to validate your points.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use location.');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const navigation = useNavigation();
  const {_id, clue, points, region, image} = route.params;

  const [complete, setComplete] = useState(false);

  const auth = useSelector(state => state.auth);

  const completeChallenge = async () => {
    try {
      await axios.patch(
        '/api/challenge/challengecompleted/' + _id,
        {},
        {
          headers: {
            authorization: auth.token,
          },
        },
      );
      setComplete(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={tw`bg-white h-screen`}>
      <Header title={'Puzzle'} showHamburger />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`flex flex-row shrink mx-8 items-center`}>
        <Icon name="keyboard-arrow-left" type="MaterialIcons" />
        <Text style={tw`text-black`}>back</Text>
      </TouchableOpacity>
      <View style={tw`flex flex-col mx-5 items-center`}>
        {image && (
          <Image
            style={{width: 235, height: 270, marginTop: 20, marginLeft: 10}}
            source={{
              uri: `data:image/png;base64,${image}`,
            }}
          />
        )}
        {clue && <Text style={tw`mt-8 text-center text-black`}>{clue}</Text>}
        <Text style={tw`text-red-400 mt-4`}>{region}</Text>
        {!complete ? (
          <TouchableOpacity onPress={completeChallenge} style={tw`mt-14`}>
            <Icon size={50} type="material-community" name="camera-outline" />
          </TouchableOpacity>
        ) : (
          <Text style={tw`text-black mt-14`}>Congratulations!</Text>
        )}
        <Text style={tw`text-red-400 text-xs mt-4`}>{points} Points</Text>
      </View>
    </View>
  );
};

export default PuzzleChallenge;
