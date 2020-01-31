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

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <LogoText>OUTSIDE</LogoText>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
          />
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
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirmação de senha"
          />
          <SubmitButton onPress={() => {}}>Cadastrar</SubmitButton>
        </Form>
        <SignLink
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        >
          <SignLinkText>Já possuo uma conta</SignLinkText>
        </SignLink>
        <AlterText>Cadastre também pelo:</AlterText>
        <AlterCointainer>
          <AlterLogin source={googleLogo} />

          <AlterLogin source={facebookLogo} />
        </AlterCointainer>
      </Container>
    </Background>
  );
}
