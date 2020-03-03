import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Container, Content, Logo } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <div>
          <Logo>
            <strong>OUTSIDE</strong>
          </Logo>
          <nav>
            <NavLink activeStyle={{ color: '#fff' }} to="/attractions">
              Atrações
            </NavLink>
            <NavLink activeStyle={{ color: '#fff' }} to="/requests">
              Pedidos
            </NavLink>
          </nav>
        </div>
        <aside>
          <strong>Administrador</strong>
          <button type="button" onClick={handleSignOut}>
            sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}
