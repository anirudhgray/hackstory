import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import MainApp from './MainApp';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import {store} from './store';
import {WithSplashScreen} from './components/WithSplashScreen';
import {EventProvider} from 'react-native-outside-press';
import tw from './lib/tailwind';
import {useDeviceContext} from 'twrnc';
import {useAppColorScheme} from 'twrnc';

function App() {
  useDeviceContext(tw);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, []);

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <Provider store={store}>
        <EventProvider style={{flex: 1}}>
          <MainApp />
          <Toast position="bottom" />
        </EventProvider>
      </Provider>
    </WithSplashScreen>
  );
}

export default App;
