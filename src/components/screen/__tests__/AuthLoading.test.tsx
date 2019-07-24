import 'react-native';
import * as React from 'react';
import { ThemeProvider } from 'styled-components/native';
import renderer from 'react-test-renderer';
import { render, wait } from '@testing-library/react-native';

import AuthLoading from '../AuthLoading';
import { createTheme } from '../../../theme';
import { AppProvider } from '../../../providers';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

let component;
let props: any;

describe('[AuthLoading] render', () => {
  beforeAll(() => {
    props = createTestProps({});
    component = (
      <AppProvider>
        <ThemeProvider theme={createTheme()}>
          <AuthLoading {...props} />
        </ThemeProvider>
      </AppProvider>
    );
  });

  it('component and snapshot matches', () => {
    const rendered: renderer.ReactTestRendererJSON =
      renderer.create(component).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});

describe('[AuthLoading] interaction', () => {
  beforeAll(() => {
    props = createTestProps({});
    component = (
      <AppProvider>
        <ThemeProvider theme={createTheme()}>
          <AuthLoading {...props} />
        </ThemeProvider>
      </AppProvider>
    );
  });

  it('should navigate to other screen', async () => {
    const { getByTestId } = render(component);
    await wait(async () => {
      const SplashImage = getByTestId('SPLASH_IMAGE');
      SplashImage.props.onLoadEnd();
      await wait(async () => {
        expect(props.navigation.navigate).toBeCalledTimes(1);
      });
    }, { timeout: 3000 });
  });
});
