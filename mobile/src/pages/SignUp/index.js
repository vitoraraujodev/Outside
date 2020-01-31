import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

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
            value={name}
            onChangeText={setName}
          />
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
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirmação de senha"
            value={confirm_password}
            onChangeText={setConfirmPassword}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Cadastrar
          </SubmitButton>
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
