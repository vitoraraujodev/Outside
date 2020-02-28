import styled from 'styled-components/native';

export const AttractionModal = styled.Modal`
  justify-content: center;
`;

export const Container = styled.View`
  top: 30px;
  align-self: center;
  width: 85%;
  height: 70%;
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
  padding: 12px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
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
