import styled from 'styled-components/native';

export const AttractionModal = styled.Modal`
  justify-content: center;
`;

export const Container = styled.View`
  margin: auto 0;
  align-self: center;
  width: 85%;
  max-width: 480px;
  height: 60%;
  bottom: 30px;
`;

export const Header = styled.View`
  background: #bb3333;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 8px;
  top: 0;

  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-width: 3px;
  border-bottom-color: #fff;

  elevation: 2;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #fff;
`;

export const Close = styled.TouchableOpacity``;

export const Content = styled.View`
  background: #eee;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const Picture = styled.Image`
  width: 100%;
`;

export const Description = styled.Text`
  padding: 18px;
  color: #444;
`;

export const Background = styled.TouchableWithoutFeedback``;

export const BackgroundSpace = styled.View`
  flex: 1;
`;

export const Block = styled.View`
  background: #999;
  height: 150px;
  width: 150px;
  margin: 4px;
`;

export const Scroll = styled.ScrollView``;
