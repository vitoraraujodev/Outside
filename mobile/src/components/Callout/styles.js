import styled from 'styled-components/native';

import { Callout } from 'react-native-maps';

export const OutsideCallout = styled(Callout)`
  width: 300px;
`;

export const Container = styled.View``;

export const Content = styled.View`
  border-radius: 12px;
  border: 3px solid #ddd;
  background: #fff;
  align-self: center;
  width: 250px;
  overflow: hidden;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: -100px;
`;

export const InfoContainer = styled.View`
  padding: 8px 14px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #444;
  font-size: 14px;
`;

export const Description = styled.Text`
  margin-top: 4px;
  color: #888;
`;

export const Rating = styled.View`
  margin: 4px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

export const RatingText = styled.Text`
  margin-left: 4px;
  font-weight: bold;
  color: #888;
`;

export const ArrowBorder = styled.View`
  background-color: transparent;
  border-color: transparent;
  border-top-color: #ddd;
  border-width: 18px;
  align-self: center;
  margin-top: -2px;
`;

export const Arrow = styled.View`
  background-color: transparent;
  border-color: transparent;
  border-top-color: #fff;
  border-width: 18px;
  align-self: center;
  margin-top: -40px;
`;
