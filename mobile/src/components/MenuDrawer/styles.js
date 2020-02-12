import styled from 'styled-components/native';

export const Container = styled.View`
  background: #eee;
  flex: 1;
  elevation: 3;
`;

export const Scroller = styled.ScrollView``;

export const Profile = styled.View`
  flex-direction: row;

  align-items: center;
  padding: 65px 20px 16px;
  border-bottom-color: #fff;
  border-bottom-width: 3px;
  elevation: 3;
  background: #bb3333;
`;

export const Name = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-left: 24px;
`;

export const Links = styled.View`
  flex: 1;
`;
export const NavLink = styled.View`
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
`;

export const NavLinkTouchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 14px 20px;
`;

export const LinkText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-left: 24px;
  color: #666;
`;

export const AboutInfo = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: center;
  padding: 8px 0;
  width: 100%;
  border-top-color: #ddd;
  border-top-width: 1px;
`;

export const AboutTouchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AboutText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-left: 6px;
  color: #666;
`;
