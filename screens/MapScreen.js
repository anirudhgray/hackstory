import {View, Text} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
// import WebView from 'react-native-webview';
import tw from '../lib/tailwind';

const MapScreen = () => {
  return (
    <View style={tw`flex flex-col grow`}>
      <Text>MapScreen</Text>
      <WebView
        originWhitelist={['*']}
        source={{html: '<h1>Hello world</h1>'}}
      />
      <WebView
        scalesPageToFit={true}
        bounces={false}
        javaScriptEnabled
        style={{height: 500, width: 300}}
        source={{
          html: `<iframe src="https://security.stackexchange.com/questions/38070/why-some-sites-are-not-shown-when-embedding-them-in-an-iframe" width="640"
                      height="480"></iframe>
            `,
        }}
        automaticallyAdjustContentInsets={false}
      />
    </View>
  );
};

export default MapScreen;
