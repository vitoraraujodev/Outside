import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Scroller,
  Profile,
  Name,
  Links,
  NavLink,
  NavLinkTouchable,
  LinkText,
  AboutInfo,
  AboutTouchable,
  AboutText,
} from './styles';

export default function MenuDrawer() {
  return (
    <Container>
      <Profile>
        <Icon name="person" color="#fff" size={40} />
        <Name>Vitor Araujo</Name>
      </Profile>
      <Scroller>
        <Links>
          <NavLink>
            <NavLinkTouchable>
              <Icon name="explore" color="#888" size={24} />
              <LinkText>Explorar</LinkText>
            </NavLinkTouchable>
          </NavLink>
          <NavLink>
            <NavLinkTouchable>
              <Icon name="add-location" color="#888" size={24} />
              <LinkText>Adicionar</LinkText>
            </NavLinkTouchable>
          </NavLink>
          <NavLink>
            <NavLinkTouchable>
              <Icon name="star" color="#888" size={24} />
              <LinkText>Favoritos</LinkText>
            </NavLinkTouchable>
          </NavLink>
          <NavLink>
            <NavLinkTouchable>
              <Icon name="person" color="#888" size={24} />
              <LinkText>Perfil</LinkText>
            </NavLinkTouchable>
          </NavLink>
          <NavLink>
            <NavLinkTouchable>
              <Icon name="settings" color="#888" size={24} />
              <LinkText>Configurações</LinkText>
            </NavLinkTouchable>
          </NavLink>
        </Links>
      </Scroller>
      <AboutInfo>
        <AboutTouchable>
          <Icon name="info" color="#888" size={16} />
          <AboutText>Informações</AboutText>
        </AboutTouchable>
      </AboutInfo>
    </Container>
  );
}
