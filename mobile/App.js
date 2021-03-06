import React from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';
import 'react-native-gesture-handler';

import { store, persistor } from '~/store';

import Routes from '~/routes/createRouter';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar
            hidden={false}
            backgroundColor="#bb3333"
            barStyle="light-content"
          />
          <Routes />
        </PersistGate>
      </Provider>
    </>
  );
}
