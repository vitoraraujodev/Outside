import React from 'react';
import { Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  OutsideCallout,
  Container,
  Content,
  ImageContainer,
  InfoContainer,
  Title,
  Description,
  Rating,
  RatingText,
  ArrowBorder,
  Arrow,
} from './styles';

import photo from '~/assets/300x250.png';

export default function Callout({ attraction }) {
  return (
    <OutsideCallout tooltip>
      <Container>
        <Content>
          <ImageContainer>
            <Text style={{ textAlign: 'center', width: 300, height: 300 }}>
              <Image source={photo} />
            </Text>
          </ImageContainer>
          <InfoContainer>
            <Title>{attraction.title}</Title>
            <Description>
              {attraction.description
                ? attraction.description
                : 'Ainda não há uma descrição.. Indique uma! '}
            </Description>
            <Rating>
              <Icon name="star" color="#ffcc00" size={20} />
              <RatingText>4.7</RatingText>
            </Rating>
          </InfoContainer>
        </Content>
        <ArrowBorder />
        <Arrow />
      </Container>
    </OutsideCallout>
  );
}
