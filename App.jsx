import React from 'react';
import MainApp from './MainApp';
import {Provider} from 'react-redux';
import {store} from './store';

function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
