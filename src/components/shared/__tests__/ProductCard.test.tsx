import 'react-native';
import * as React from 'react';
import ProductCard from '../ProductCard';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {
  render,
  act,
  RenderResult,
  fireEvent,
} from '@testing-library/react-native';
import { createTheme } from '../../../theme';
import { ThemeType } from '../../../types';
import { ThemeProvider } from 'styled-components/native';
import { AppProvider } from '../../../providers';

const component = (props?: any) => {
  return (
    <AppProvider>
      <ThemeProvider theme={createTheme(ThemeType.LIGHT)}>
        <ProductCard {...props}/>
      </ThemeProvider>
    </AppProvider>
  );
};

let rendered: renderer.ReactTestRendererJSON;
let testingLib: RenderResult;
// test for the container page in dom
describe('[ProductCard] ui rendering test', () => {
  it('should render outer component and snapshot matches', () => {
    act(() => {
      rendered = renderer.create(component()).toJSON();
    });
    expect(rendered).toMatchSnapshot();
  });

  it('should include button when "variant" is subscription', () => {
    const Component = component({ variant: 'subscription' });
    act(() => {
      rendered = renderer.create(Component).toJSON();
    });
    testingLib = render(Component); // Todo: add SwitchToggle testID
  });

  it('should include summary title text when product card is pressed', () => {
    const Component = component();
    testingLib = render(Component);
    act(() => {
      rendered = renderer.create(Component).toJSON();
      fireEvent.press(testingLib.getByTestId('productCard'));
    });
    testingLib.getByTestId('summaryTitleText');
  });
});

describe('[ProductCard] Interaction', () => {
  let testingLib: RenderResult;

  it('should simulate [notification Icon] click', () => {
    let cnt = 0;
    const Component = component({
      isNotificationEnable: true,
      onClickNotification: () => cnt++,
    });
    testingLib = render(Component);
    act(() => {
      fireEvent.press(testingLib.getByTestId('notiOffIcon'));
    });
    expect(cnt).toBe(1);
  });
});
