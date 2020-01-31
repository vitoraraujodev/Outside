import React from 'react';

import googleLogo from '~/assets/googleLogo.png';
import facebookLogo from '~/assets/facebookLogo.png';

import {
  LogoText,
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  AlterCointainer,
  AlterText,
  AlterLogin,
} from './styles';

import Background from '~/components/Background';

export default function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <LogoText>OUTSIDE</LogoText>
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>
        <SignLink
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <SignLinkText>Cadastrar-se</SignLinkText>
        </SignLink>
        <AlterText>Acesse também pelo:</AlterText>
        <AlterCointainer>
          <AlterLogin source={googleLogo} />

          <AlterLogin source={facebookLogo} />
        </AlterCointainer>
      </Container>
    </Background>
  );
}
