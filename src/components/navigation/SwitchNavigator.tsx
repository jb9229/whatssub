import React, { useContext } from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
  NavigationContainer,
} from 'react-navigation';

import { AppContext } from '../../contexts';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../theme';
import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';
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
  const { state } = useContext(AppContext);
  const { theme } = state;

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <AppContainer
        screenProps={{ theme: createTheme(theme) }}
      />
    </ThemeProvider>
  );
};
