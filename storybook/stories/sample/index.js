import Button from './Button';
import CenterView from './CenterView';
import React from 'react';
import { Text } from 'react-native';
import Welcome from './Welcome';

import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';

// This is Storybook's official sample
// Leave it as reference
storiesOf('samples', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('welcome', () => <Welcome showApp={linkTo('Button')} />)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
