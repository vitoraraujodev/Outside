import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Map from '~/pages/Map';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({ SignIn, SignUp }),
        App: createDrawerNavigator({ Map }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
