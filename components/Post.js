import {View, Text, Image} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import {useWindowDimensions} from 'react-native';
import {Icon} from '@rneui/themed';

const Post = ({caption, image, name, userId, tourist}) => {
  const {height, width} = useWindowDimensions();
  return (
    <View style={tw`mb-4`}>
      <View style={tw`flex flex-row justify-between items-center p-2`}>
        <View style={tw`flex flex-row items-center`}>
          <Text style={tw`mr-2 text-black font-bold`}>@ {name}</Text>
          <Text style={tw`text-xs text-black`}>
            ({tourist ? 'Tourist' : 'Native'})
          </Text>
        </View>
        <Icon name="heart" type="feather" />
      </View>
      <Image
        style={{width: width * 0.9, height: width * 0.9, borderRadius: 20}}
        source={{
          uri: `data:image/png;base64,${image}`,
        }}
      />
      {caption && (
        <Text style={tw`text-xs mx-5 text-black mt-2`}>
          @ {name} : {caption}
        </Text>
      )}
    </View>
  );
};

export default Post;
