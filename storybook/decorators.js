import { addDecorator } from '@storybook/react-native';
import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import './rn-addons';
import { createTheme } from '../src/theme';
import { withKnobs } from '@storybook/addon-knobs';
import { AppContext, AppProvider } from '../src/providers';

const AppProviderDecorator = (storyFn) => (
  <AppProvider>
    {storyFn()}
  </AppProvider>
);

const ThemeProviderWrapper = (props) => {
  const { state } = useContext(AppContext);
  const { theme } = state;

  return (
    <ThemeProvider theme={createTheme(theme)}>
      {props.children}
    </ThemeProvider>
  );
};
const ThemeProviderDecorator = (storyFn) => (
  <ThemeProviderWrapper>
    {storyFn()}
  </ThemeProviderWrapper>
);

export const setupGlobalDecorators = () => {
  //* the order is important, the decoratos wrap from bottom to top
  addDecorator(ThemeProviderDecorator);
  addDecorator(AppProviderDecorator);
  addDecorator(withKnobs);
};
