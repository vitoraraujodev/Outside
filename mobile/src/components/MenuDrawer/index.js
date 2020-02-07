import React from 'react';
import { TouchableOpacity } from 'react-native';
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
  LegalInfo,
  LegalText,
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
      <LegalInfo>
        <TouchableOpacity>
          <LegalText>Informações Legais</LegalText>
        </TouchableOpacity>
      </LegalInfo>
    </Container>
  );
}
