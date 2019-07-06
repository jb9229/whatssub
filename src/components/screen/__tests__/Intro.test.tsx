import 'react-native';
import * as React from 'react';
import firebase from 'firebase';

// Note: test renderer must be required after react-native.
import { ThemeProvider } from 'styled-components/native';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitForElement } from 'react-native-testing-library';

import { AppProvider } from '../../../providers';
import Intro, { titleArray } from '../Intro';
import Button from '../../shared/Button';
import { createTheme, ThemeType } from '../../../theme';

const createTestProps = (obj: object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...obj,
});

const props: any = createTestProps({});
const Component = (
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
const RTLComponent = (props) => (
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

const act = renderer.act;

beforeEach(() => {
  jest.useFakeTimers();
});

// test for the container page in dom
describe('[Intro] screen rendering test', () => {
  it('should render outer component and snapshot matches', () => {
    act(() => {
      json = renderer.create(Component).toJSON();
    });
    expect(json).toMatchSnapshot();
  });
});

describe('[Intro] screen useTransition with setInterval test', () => {
  it('should match the second title text after 1500ms', () => {
    const { getByTestId } = render(<RTLComponent {...props} />);
    setTimeout(() => {
      expect(getByTestId('animatableText').props.children).toBe(titleArray[1]); // 'Subscription'
    }, 2000);
    jest.clearAllTimers();
  });
});

describe('[Intro] Interaction', () => {
  let rendered: renderer.ReactTestRenderer;
  let root: renderer.ReactTestInstance;
  let testingLib: any;

  it('should simulate [googleLogin] click', () => {
    act(() => {
      rendered = renderer.create(Component);
    });
    root = rendered.root;
    act(() => {
      const buttons = root.findAllByType(Button);
      expect(buttons[0].props.isLoading).toEqual(false); // TODO: test with useState
    });
    testingLib = render(Component);
    fireEvent(testingLib.getByTestId('btnGoogle'), 'click');
    // expect(context.dispatch).toHaveBeenCalledWith({ type: 'reset-user' });
    // expect(context.dispatch).toHaveBeenCalledWith({ type: 'set-user' }, expect.any(Object));
  });

  it('should simulate [facebookLogin] click', async (done) => {
    const navigate = jest.fn(() => done());
    props.navigation.navigate = navigate;
    act(() => {
      rendered = renderer.create(Component);
    });
    root = rendered.root;
    act(() => {
      const buttons = root.findAllByType(Button);
      fireEvent(testingLib.getByTestId('btnFacebook'), 'click');
    });
    expect(navigate).toBeCalled();
  });
});
