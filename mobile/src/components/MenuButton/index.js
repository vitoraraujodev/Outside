import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

export default function MenuButton({ navigation, color }) {
  return (
    <Container onPress={() => navigation.toggleDrawer()}>
      <Icon name="menu" color={color || '#666'} size={36} />
    </Container>
  );
}
