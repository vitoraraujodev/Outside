import React from 'react';
import { StatusBar } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './src/config/ReactotronConfig';
import 'react-native-gesture-handler';

import { store, persistor } from './src/store';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#bb3333" />
          <Routes />
        </PersistGate>
      </Provider>
    </>
  );
}
