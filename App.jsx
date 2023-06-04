import React from 'react';
import MainApp from './MainApp';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import {store} from './store';

function App() {
  return (
    <Provider store={store}>
      <MainApp />
      <Toast position="bottom" />
    </Provider>
  );
}

export default App;
