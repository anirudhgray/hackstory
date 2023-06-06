import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import tw from '../lib/tailwind';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';

const UserChallengesScreen = ({route}) => {
  const {completedChallenges} = route.params;
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white h-screen flex flex-col`}>
      <Header title={'Completed'} showHamburger showFilter />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`flex flex-row shrink mx-8 items-center mb-4`}>
        <Icon name="keyboard-arrow-left" type="MaterialIcons" />
        <Text style={tw`text-black`}>back</Text>
      </TouchableOpacity>
      <ScrollView style={tw`grow mt-3 mb-8 mt-5`}>
        {completedChallenges &&
          completedChallenges.map((item, index) => {
            return (
              <TouchableOpacity
                key={item._id + index}
                style={tw`bg-white p-2 mx-10 my-4 shadow-shadow shadow-xl items-center rounded-xl`}>
                {item.image && (
                  <Image
                    style={{width: 150, height: 150, margin: 20}}
                    source={{
                      uri: `data:image/png;base64,${item.image}`,
                    }}
                  />
                )}
                <Text style={tw`text-black flex-wrap`}>{item.title}</Text>
                {item.clue && (
                  <Text style={tw`mt-3 text-black flex-wrap`}>
                    Clue: {item.clue}
                  </Text>
                )}
                {item.region && (
                  <Text style={tw`mt-3 text-black flex-wrap`}>
                    Region: {item.region}
                  </Text>
                )}
                <Text style={tw`mt-3 text-black flex-wrap`}>
                  Points: {item.points}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default UserChallengesScreen;
