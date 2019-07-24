import 'react-native';
import * as React from 'react';

import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { render, fireEvent, act, RenderResult } from '@testing-library/react-native';

import { createTheme, ThemeType } from '../../../theme';
import MainEmpty from '../MainEmpty';

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
