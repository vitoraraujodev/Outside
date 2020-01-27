import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { signInRequest } from '~/store/modules/auth/actions';

import { Content, Wrapper } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Wrapper>
      <Content>
        <div>
          <strong>OUTSIDE</strong>
        </div>

        <Form onSubmit={handleSubmit}>
          <span>E-MAIL DE ACESSO</span>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <span>SENHA</span>
          <Input name="password" type="password" placeholder="********" />

          <button type="submit">
            {loading ? 'Carregando...' : 'Entrar no sistema'}
          </button>
        </Form>
      </Content>
    </Wrapper>
  );
}
