import 'react-native';
import * as React from 'react';
import {
  RenderResult,
  act,
  fireEvent,
  render,
} from '@testing-library/react-native';

import MainEmpty from '../MainEmpty';
import { ThemeProvider } from 'styled-components/native';
import { ThemeType } from '../../../types';
import { createTheme } from '../../../theme';
import renderer from 'react-test-renderer';

const props = {
  navigation: {
    goBack: jest.fn(),
  },
};

const component = (
  <ThemeProvider theme={createTheme(ThemeType.LIGHT)}>
    <MainEmpty {...props} />
  </ThemeProvider>
);

describe('[Temp] render', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();
    expect(rendered).toBeTruthy();
  });
});

describe('[Temp] Interaction', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(component);
  });
});
