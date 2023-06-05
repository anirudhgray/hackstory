import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import tw from '../lib/tailwind';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';

const PuzzleChallenge = ({route}) => {
  const navigation = useNavigation();
  const {_id, clue, points, region, image} = route.params;
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
        <TouchableOpacity style={tw`mt-14`}>
          <Icon size={50} type="material-community" name="camera-outline" />
        </TouchableOpacity>
        <Text style={tw`text-red-400 text-xs mt-4`}>{points} Points</Text>
      </View>
    </View>
  );
};

export default PuzzleChallenge;
