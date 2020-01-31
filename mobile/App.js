import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

import './src/config/ReactotronConfig';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#bb3333" />
      <Routes />
    </>
  );
}
