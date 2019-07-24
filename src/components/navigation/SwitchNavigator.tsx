import React, { useContext } from 'react';
import { AsyncStorage } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  NavigationContainer,
} from 'react-navigation';

import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';
import { AppContext } from '../../contexts';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../theme';
import { ThemeType } from '../../types';
import MainEmpty from '../screen/MainEmpty';
import AuthLoadingScreen from '../screen/AuthLoading';
import ExamplePieChartMonth from '../screen/ExamplePieChartMonth';

const SwitchNavigator: NavigationContainer = createSwitchNavigator(
  {
    AuthLoadingScreen,
    AuthStackNavigator,
    MainStackNavigator,
    ExamplePieChartMonth,
    MainEmpty,
  },
  {
    initialRouteName: 'AuthLoadingScreen',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default function MySwitchNavigator() {
  const { state, dispatch } = useContext(AppContext);
  const { theme } = state;

  const changeTheme = async () => {
    let payload: { theme: ThemeType };
    if (state.theme === ThemeType.LIGHT) {
      payload = {
        theme: ThemeType.DARK,
      };
    } else {
      payload = {
        theme: ThemeType.LIGHT,
      };
    }
    await AsyncStorage.setItem('theme', payload.theme);
    dispatch({
      type: 'change-theme-mode',
      payload,
    });
  };

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <AppContainer
        screenProps={{
          theme: createTheme(theme),
          changeTheme,
        }}
      />
    </ThemeProvider>
  );
};
