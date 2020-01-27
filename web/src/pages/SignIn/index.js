import React from 'react';

import { Content, Wrapper } from './styles';

export default function SignIn() {
  return (
    <Wrapper>
      <Content>
        <div>
          <strong>OUTSIDE</strong>
        </div>

        <form>
          <span>E-MAIL DE ACESSO</span>
          <input type="email" placeholder="exemplo@email.com" />
          <span>SENHA</span>
          <input type="password" placeholder="********" />

          <button type="submit">Entrar no sistema</button>
        </form>
      </Content>
    </Wrapper>
  );
}
