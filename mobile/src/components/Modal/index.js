import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  AttractionModal,
  Container,
  Header,
  Title,
  Close,
  Content,
  Scroll,
  Picture,
  Description,
  Background,
  BackgroundSpace,
  Block,
} from './styles';

import photo from '~/assets/300x250.png';

export default function Modal({ isVisible, onClose, attraction }) {
  return (
    <AttractionModal
      onRequestClose={onClose}
      animationType="slide"
      transparent
      visible={isVisible}
    >
      <Background onPress={onClose}>
        <BackgroundSpace>
          <Background>
            <Container>
              <Header>
                <Title>{attraction.title}</Title>
                <Close onPress={onClose}>
                  <Icon name="close" size={30} color="#fff" />
                </Close>
              </Header>
              <Content>
                <Scroll>
                  <Picture resize="cover" source={photo} />
                  <Description>
                    {attraction.description
                      ? attraction.description
                      : 'Ainda não há uma descrição.. Indique uma!'}
                  </Description>
                </Scroll>
              </Content>
            </Container>
          </Background>
        </BackgroundSpace>
      </Background>
    </AttractionModal>
  );
}
