import 'react-native';
import * as React from 'react';
import PieChart from '../PieChart';

import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { createTheme } from '../../../theme';
import { ThemeType } from '../../../types';

const createTestProps = (obj: object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...obj,
});
const props: any = createTestProps({});
const component = (
  <ThemeProvider theme={createTheme(ThemeType.LIGHT)}>
    <PieChart {...props} />
  </ThemeProvider>
);

describe('[PieChart]', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();
    expect(rendered).toMatchSnapshot();
    // expect(rendered).toBeTruthy();
  });
});
