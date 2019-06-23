import React, { useContext } from 'react';
import { AppContext } from '../../contexts';
import { createSwitchNavigator, createAppContainer, NavigationContainer } from 'react-navigation';
import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';
import TempScreen from '../screen/Temp';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../theme';

const SwitchNavigator: NavigationContainer = createSwitchNavigator(
  {
    AuthStackNavigator,
    MainStackNavigator,
    TempScreen,
  },
  {
    initialRouteName: 'AuthStackNavigator',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default () => {
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
