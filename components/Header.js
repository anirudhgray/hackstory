import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import tw from '../lib/tailwind';
import {Icon} from '@rneui/themed';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import OutsidePressHandler from 'react-native-outside-press';
import {useAppColorScheme} from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {logout} from '../slices/AuthSlice';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

const Header = ({title, showHamburger, showFilter}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [active, setActive] = useState('');
  const user = useSelector(state => state.auth);
  // const [colorScheme, toggleColorScheme, setColorScheme] =
  //   useAppColorScheme(tw);

  const submitLogout = () => {
    dispatch(logout());
    Toast.show({
      type: 'success',
      text1: 'Phir milte hain.',
    });
  };

  return (
    <OutsidePressHandler
      style={tw`z-5`}
      onOutsidePress={() => {
        setActive(false);
      }}>
      <View
        style={tw`relative w-screen flex flex-row justify-between items-center pl-7 ${
          !showHamburger && 'p-7'
        } z-1`}>
        <Text style={styles.laila}>{title || ''}</Text>
        <View style={tw`flex flex-row`}>
          {showFilter && (
            <TouchableOpacity
              style={tw`pt-1 flex flex-row shrink items-center`}>
              <Icon name="filter" type="feather" />
            </TouchableOpacity>
          )}
          {showHamburger && (
            <TouchableOpacity onPress={() => setActive(!active)} hitSlop={10}>
              <Icon
                style={tw`mt-1 p-7`}
                type="MaterialIcons"
                name="emoji-food-beverage"
              />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={tw` z-3 absolute bottom-0 right-0 mr-3 p-4 -mb-40 bg-highlight dark:bg-buttons ${
            active ? '' : 'hidden'
          }`}>
          <Text style={tw`text-black font-bold`}>{user.name}</Text>
          <View style={tw`mt-5`}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text style={tw`text-black`}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`mt-2`}>
              <Text style={tw`text-black`}>Dark Mode</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={submitLogout} style={tw`mt-5`}>
            <Text style={tw`text-black`}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </OutsidePressHandler>
  );
};

const styles = StyleSheet.create({
  laila: {
    fontFamily: 'Laila-SemiBold',
    color: 'black',
    fontSize: 30,
    fontWeight: 600,
  },
});

export default Header;
