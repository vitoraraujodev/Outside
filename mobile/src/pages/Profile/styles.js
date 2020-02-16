import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

// Para considerar a StatusBar no iphone
export const Container = styled.SafeAreaView`
  margin: auto 0;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 28 },
})`
  margin: 15px 25px;
  background: #fff;
  align-self: stretch;
  border-radius: 4px;
  elevation: 2;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const Separator = styled.View`
  height: 1px;
  background: #ddd;
  margin: 20px 0 30px;
`;

export const LogoutButton = styled(Button)`
  width: 220px;
  align-self: center;
  elevation: 1;
`;
