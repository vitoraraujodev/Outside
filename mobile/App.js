import React from 'react';
import { View, Text } from 'react-native';

import './src/config/ReactotronConfig';

export default function App() {
  console.tron.log('hey');
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
}
