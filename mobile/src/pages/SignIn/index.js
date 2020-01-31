import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

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
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
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
