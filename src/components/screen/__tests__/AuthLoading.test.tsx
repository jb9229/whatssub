import 'react-native';
import * as React from 'react';
import { render, wait } from '@testing-library/react-native';
import { AppProvider } from '../../../providers';
import AuthLoading from '../AuthLoading';
import { ThemeProvider } from 'styled-components/native';
import { createTheme } from '../../../theme';
import renderer from 'react-test-renderer';

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
