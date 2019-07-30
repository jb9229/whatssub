import { InitialProviders } from '../src/providers';
import React from 'react';
import { addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

const InitialProviderDecorator = (storyFn) => (
  <InitialProviders>
    {storyFn()}
  </InitialProviders>
);

export const setupGlobalDecorators = () => {
  //* the order is important, the decoratos wrap from bottom to top
  addDecorator(InitialProviderDecorator);
  addDecorator(withKnobs);
};
