import 'react-native';
import * as React from 'react';

// Note: test renderer must be required after react-native.
import { ThemeProvider } from 'styled-components/native';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitForElement } from 'react-native-testing-library';

import { AppProvider } from '../../../providers';
import Intro from '../Intro';
import Button from '../../shared/Button';
import { createTheme, ThemeType } from '../../../theme';

const createTestProps = (obj: object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...obj,
});

const props: any = createTestProps({});
const component = (
  <AppProvider>
    <ThemeProvider theme={createTheme(ThemeType.LIGHT)}>
      <Intro
        {...props}
        screenProps={{
          theme: createTheme(ThemeType.LIGHT),
        }}
      />
    </ThemeProvider>
  </AppProvider>
);
let json: renderer.ReactTestRendererJSON;

// test for the container page in dom
describe('[Intro] screen rendering test', () => {
  it('should render outer component and snapshot matches', () => {
    json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('[Intro] Interaction', () => {
  let rendered: renderer.ReactTestRenderer;
  let root: renderer.ReactTestInstance;
  let testingLib: any;

  it('should simulate [googleLogin] click', () => {
    rendered = renderer.create(component);
    root = rendered.root;
    testingLib = render(component);

    jest.useFakeTimers();
    const buttons = root.findAllByType(Button);
    fireEvent(testingLib.getByTestId('btnGoogle'), 'click');

    // expect(context.dispatch).toHaveBeenCalledWith({ type: 'reset-user' });
    // expect(context.dispatch).toHaveBeenCalledWith({ type: 'set-user' }, expect.any(Object));

    jest.runAllTimers();
    expect(buttons[0].props.isLoading).toEqual(false); // TODO: test with useState
  });

  it('should simulate [facebookLogin] click', () => {
    rendered = renderer.create(component);
    root = rendered.root;

    const buttons = root.findAllByType(Button);
    fireEvent(testingLib.getByTestId('btnFacebook'), 'click');
    expect(buttons[1].props.isLoading).toEqual(false);
  });
});
