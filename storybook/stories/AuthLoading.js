import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import AuthLoading from '../../src/components/screen/AuthLoading';
import styled from 'styled-components/native';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const Container = styled.View`
  flex: 1;
`;

const AuthLoadingStory = () => {
  const [count, setCount] = useState(1);
  return (
    <Container>
      <AuthLoading
        // by changing key, the component will re-render
        key={count}
        navigation={{
          navigate: (arg) => {
            // console.log(`navigate function got called ${count} times`);
            setTimeout(() => {
              setCount(count + 1);
            }, number('delay', 300));
          },
        }}
      />
    </Container>
  );
};

storiesOf('AuthLoading', module)
  .add('default', () => <AuthLoadingStory />);
