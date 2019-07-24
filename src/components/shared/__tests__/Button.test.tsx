import * as React from 'react';
import Button from '../Button';
import { Text } from 'react-native';

// Note: test renderer must be required after react-native.
import { ThemeProvider } from 'styled-components/native';
import { ThemeType } from '../../../types';
import { createTheme } from '../../../theme';
import renderer from 'react-test-renderer';

const component = (props?: any) => {
  return (
    <ThemeProvider theme={createTheme(ThemeType.LIGHT)}>
      <Button {...props}/>
    </ThemeProvider>
  );
};

describe('[Button]', () => {
  let rendered: renderer.ReactTestRenderer;

  it('should render without crashing', () => {
    rendered = renderer.create(component());
    expect(rendered.toJSON()).toMatchSnapshot();
    expect(rendered.toJSON()).toBeTruthy();
  });

  describe('[Button] Interaction', () => {
    let root: renderer.ReactTestInstance;
    let cnt = 1;
    it('simulate onPress', () => {
      rendered = renderer.create(component({
        onClick: () => cnt++,
      }));
      root = rendered.root;

      root.findByType(Button).props.onClick();
      expect(cnt).toBe(2);
    });

    it('renders disabled', () => {
      rendered = renderer.create(component({ isDisabled: true }));
      root = rendered.root;

      const texts = root.findAllByType(Text);
      expect(texts).toHaveLength(1);
    });
  });
});
