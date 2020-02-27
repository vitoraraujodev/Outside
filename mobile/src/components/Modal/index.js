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
  Background,
  BackgroundSpace,
  Block,
} from './styles';

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
                  <Block />
                  <Block />
                  <Block />
                </Scroll>
              </Content>
            </Container>
          </Background>
        </BackgroundSpace>
      </Background>
    </AttractionModal>
  );
}
