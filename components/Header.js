import {View, Text} from 'react-native';
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

const Header = ({title, showHamburger}) => {
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
      onOutsidePress={() => {
        setActive(false);
      }}>
      <View
        style={tw`relative w-screen flex flex-row justify-between items-center pl-3`}>
        <Text style={tw`text-3xl text-black`}>{title || ''}</Text>
        <TouchableOpacity onPress={() => setActive(!active)} hitSlop={10}>
          <Icon
            style={tw`mt-1 p-3`}
            type="MaterialIcons"
            name="emoji-food-beverage"
          />
        </TouchableOpacity>
        <View
          style={tw`absolute bottom-0 right-0 mr-3 p-4 -mb-40 bg-highlight dark:bg-buttons ${
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

export default Header;
