import styled from 'styled-components/native';

export const Container = styled.View`
  z-index: 9;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 85px;
  background: #eee;
  elevation: 5;

  flex-direction: row;
  align-items: center;

  padding: 0 4%;

  border-top-width: 3px;
  border-top-color: #ddd;
`;

export const KindContainer = styled.View`
  align-items: center;
  flex: 1;
`;

export const KindButtom = styled.TouchableOpacity`
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const KindText = styled.Text`
  margin-top: 4px;
  color: #666;
  font-size: 10px;
  font-weight: bold;
`;
