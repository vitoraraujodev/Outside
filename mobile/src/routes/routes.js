import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Map from '~/pages/Map';
import Profile from '~/pages/Profile';

import MenuDrawer from '~/components/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.75,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  },
};

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({ SignIn, SignUp }),
        App: createDrawerNavigator({ Map, Profile }, DrawerConfig),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
