import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useEffect} from 'react';
import tw from '../lib/tailwind';
import Header from '../components/Header';
import MasonryList from 'react-native-masonry-list';

const HomeScreen = () => {
  const handleImagePress = (item, index) => {
    console.log(item, index);
  };
  return (
    <SafeAreaView style={tw`bg-white h-full relative flex flex-col`}>
      <Header title="Explore" showHamburger />
      {/* <View style={tw`flex flex col`}>
        <View>
          <Text style={tw`text-black`}>Nice.</Text>
        </View>
        <View>
          <Text style={tw`text-black`}>Nice.</Text>
        </View>
      </View> */}
      <View style={tw`grow`}>
        <MasonryList
          // completeCustomComponent={}
          onPressImage={(item, index) => handleImagePress(item, index)}
          images={[
            {
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OJtNCCoVlW_HWy3qVfjmbAHaEu%26pid%3DApi&f=1&ipt=af0953c4666000732ecf2d6b43074da2fb527ccc93a757042e0addadaf9c25fc&ipo=images',
            },
            {
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YbZCVYBL-eK34RdBao8_dAHaJ4%26pid%3DApi&f=1&ipt=08efdeb91de22105f0bd7e69bea11bf3040a54d29c0f5417d8538c7c793fd113&ipo=images',
            },
            {
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.YW0FqUnXn3udZr9ftvk2SgHaEK%26pid%3DApi&f=1&ipt=5df63e8ccc5699d4518159bc6a0c8dbf3cfe2c7b30d646a6b9bdd2394dbec20d&ipo=images',
            },
            {
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.hGqHc10A6d7TLLmYBgGIYgHaE8%26pid%3DApi&f=1&ipt=4056ceeaac12128b08c5f9ea3efb9553ab3ddb65f589e94f6915add968c0e450&ipo=images',
            },
            {
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TRp_bgMRE669AIi_DMoe2AHaHa%26pid%3DApi&f=1&ipt=735dd31f54927d1510f3fbf117fcf8a660d03c8eb6a2f70bf5ed1bfb1216d864&ipo=images',
            },
            {
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hYYekVm-UYG1tcTTT9fGVAHaE8%26pid%3DApi&f=1&ipt=2c29d876795660090c16faa9e624eb6b5fd1675ad384d8c8970dc098e6e8505d&ipo=images',
            },
            {
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NORpz_SUxnKbJIm5LArYhwHaE8%26pid%3DApi&f=1&ipt=387ffd92352ffc3278abed104f879412de837c893e71bfb59c21126b22460caf&ipo=images',
            },
            {
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.dgWQTiT93JgpoNBme0MyYQHaE9%26pid%3DApi&f=1&ipt=9e5b1320fddcc8eaaf45edb289805dc3137312f928d09d2100746d187507fd89&ipo=images',
            },
            {
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mMlZKWCa_jFBsdJXOF252QHaFj%26pid%3DApi&f=1&ipt=bb5e15da7bfe87a7dbc1e61a1aee68a2e07b8b92518e1bd7372bbd0fd39eaf79&ipo=images',
            },
            {
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jLmF23qVjzNusGQmKohAAgHaE8%26pid%3DApi&f=1&ipt=713078279d75de13a0cf7998274d3d8e23cc35a3c5b789b8ea572de7f03c5003&ipo=images',
            },
            {
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIF.na249fAIXbZ%252be38mMUhRyA%26pid%3DApi&f=1&ipt=8ca30b07812edcfb03d97ab17e793e4c2db9e026e7908090ee796207d27c52b2&ipo=images',
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
