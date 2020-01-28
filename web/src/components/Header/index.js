import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Content, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <div>
          <Logo>
            <strong>OUTSIDE</strong>
          </Logo>
          <nav>
            <NavLink activeStyle={{ color: '#f2d984' }} to="/attractions">
              Atrações
            </NavLink>
          </nav>
        </div>
        <aside>
          <strong>Administrador</strong>
          <span>sair do sistema</span>
        </aside>
      </Content>
    </Container>
  );
}
