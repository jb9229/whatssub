import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react-native';
import Button from '../../../src/components/shared/Button';
import styled from 'styled-components/native';
import { IC_LOGO, IC_GOOGLE, IC_FACEBOOK, IC_SLASH } from '../../../src/utils/Icons';
import { text, boolean, number } from '@storybook/addon-knobs';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundLight};
`;

const ContainerDeco = (storyFn) => (
  <Container>
    {storyFn()}
  </Container>
);

storiesOf('shared-Button', module)
  .addDecorator(ContainerDeco)
  .add('default', () => (
    <Button
      onClick={() => console.log('button clicked')}
      text='Test Button'
      style={{
        backgroundColor: '#fff',
      }}
    />
  ))
  .add('isLoading', () => (
    <Button
      isLoading={true}
    />
  ))
  .add('isDisabled', () => (
    <Button
      text='Test Button'
      isDisabled={true}
    />
  ))
  .add('img Source', () => (
    <>
      <Button
        text='Test Button'
        style={{
          backgroundColor: '#fff',
        }}
        imgLeftSrc={IC_GOOGLE}
      />
      <Button
        text='Test Button'
        style={{
          backgroundColor: '#fff',
        }}
        imgLeftSrc={IC_FACEBOOK}
      />
    </>
  ))
  .add('custom', () => (
    <Button
      style={{
        backgroundColor: '#ccc',
      }}
      text={text('text', 'editable')}
      isDisabled={boolean('isDisabled', false)}
      isLoading={boolean('isLoading', false)}
    />
  ));
