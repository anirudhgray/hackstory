import React, {useEffect, useState} from 'react';
import MainApp from './MainApp';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import {store} from './store';
import {WithSplashScreen} from './components/WithSplashScreen';

function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, []);

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <Provider store={store}>
        <MainApp />
        <Toast position="bottom" />
      </Provider>
    </WithSplashScreen>
  );
}

export default App;
