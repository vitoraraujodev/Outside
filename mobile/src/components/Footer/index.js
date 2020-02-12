import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, KindContainer, KindButtom, KindText } from './styles';

export default function Footer() {
  return (
    <Container>
      <KindContainer>
        <KindButtom>
          <Icon name="landscape" size={28} color="#666" />
        </KindButtom>
        <KindText>Naturezas</KindText>
      </KindContainer>
      <KindContainer>
        <KindButtom>
          <Icon name="account-balance" size={28} color="#666" />
        </KindButtom>
        <KindText>Histórias</KindText>
      </KindContainer>
      <KindContainer>
        <KindButtom>
          <Icon name="restaurant" size={28} color="#666" />
        </KindButtom>
        <KindText>Restaurantes</KindText>
      </KindContainer>
    </Container>
  );
}
