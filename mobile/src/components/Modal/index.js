import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Image, Dimensions, StatusBar } from 'react-native';

import api from '~/services/api';

import {
  AttractionModal,
  Container,
  Header,
  Title,
  Close,
  Content,
  Scroll,
  Loading,
  Description,
  Background,
  BackgroundSpace,
} from './styles';

const WIDTH = Dimensions.get('window').width;

export default function Modal({ isVisible, onClose, attraction }) {
  const [picture, setPicture] = useState('');
  const [picReady, setPicReady] = useState(false);
  const [pictureWidth, setWidth] = useState();
  const [pictureHeight, setHeight] = useState();

  useEffect(() => {
    async function loadPicture() {
      const response = await api.get(`/picture/${attraction.picture_id}`);
      setPicture(response.data.url);
    }

    if (isVisible) {
      loadPicture();
    } else {
      setPicture('');
      setPicReady(false);
    }
  }, [isVisible]); //eslint-disable-line

  useEffect(() => {
    if (picture) {
      Image.getSize(picture, (width, height) => {
        const aspectRatio = width / (WIDTH * 0.85);
        setHeight(height / aspectRatio);
        setWidth(WIDTH * 0.85);
        setPicReady(true);
      });
    }
  }, [picture]);

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
                  {picReady ? (
                    <Image
                      source={{ uri: picture }}
                      style={{ width: pictureWidth, height: pictureHeight }}
                    />
                  ) : (
                    <Loading size={30} color="#fff" />
                  )}
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
