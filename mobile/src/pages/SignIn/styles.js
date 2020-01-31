import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const LogoText = styled.Text`
  color: #fff;
  font-size: 44px;
  font-weight: bold;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  margin-top: 50px;
`;

export const Form = styled.View`
  background: #fff;
  padding: 28px;
  border-radius: 4px;
  align-self: stretch;
  margin-top: 50px;
  elevation: 2;
`;

export const FormInput = styled(Input)`
  margin-bottom: 12px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 12px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 12px;
`;

export const SignLinkText = styled.Text`
  color: #eee;
  font-weight: bold;
  font-size: 16px;
`;

export const AlterCointainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const AlterText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-top: 40px;
`;

export const AlterLogin = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin: 0 12px;
`;
