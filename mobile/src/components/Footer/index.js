import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, KindContainer, KindButtom, KindText } from './styles';

export default function Footer({ currentKind, onKindChange }) {
  const natureSelected = currentKind === 'n';
  const historySelected = currentKind === 'h';
  const restaurantSelected = currentKind === 'r';

  return (
    <Container>
      <KindContainer>
        <KindButtom selected={natureSelected} onPress={() => onKindChange('n')}>
          <Icon name="landscape" size={28} color="#666" />
        </KindButtom>
        <KindText>Naturezas</KindText>
      </KindContainer>
      <KindContainer>
        <KindButtom
          selected={historySelected}
          onPress={() => onKindChange('h')}
        >
          <Icon name="account-balance" size={28} color="#666" />
        </KindButtom>
        <KindText>Histórias</KindText>
      </KindContainer>
      <KindContainer>
        <KindButtom
          selected={restaurantSelected}
          onPress={() => onKindChange('r')}
        >
          <Icon name="restaurant" size={28} color="#666" />
        </KindButtom>
        <KindText>Restaurantes</KindText>
      </KindContainer>
    </Container>
  );
}
