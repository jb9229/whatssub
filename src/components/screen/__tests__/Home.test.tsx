import * as React from 'react';
import 'react-native';
import Home from '../Home';

import { render, RenderResult } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

let props: any;
let component: React.ReactElement;
let testingLib: RenderResult;

const createTestProps = (obj: object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...obj,
});

describe('[Home] screen', () => {
  beforeEach(() => {
    props = createTestProps({ });
    component = (
      <Home {...props} />
    );
    testingLib = render(component);
  });

  it('renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('should render [Text] with value "myText"', () => {
    const textInstance = testingLib.getByTestId('myText');
    expect(textInstance.props.children).toEqual('dooboolab');
  });

  describe('interactions', () => {
    beforeEach(() => {
      testingLib = render(component);
    });

    it('should simulate onClick', () => {
      // const btn = testingLib.queryByTestId('btn');
      // act(() => {
      //   fireEvent.press(btn);
      //   fireEvent.press(btn);
      // });
      // expect(cnt).toBe(3);
    });
  });
});