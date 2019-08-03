import React from 'react';
import { StyleSheet } from 'react-native';
import * as Icon from '@expo/vector-icons';

// Static Variable
const DEFAULT_ICON_SIZE = 32;
const COLOR_TABICON_DEFAULT = '#c6cbcf';
const COLOR_TABICON_SELECTED = '#75a3ff';

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3,
  }
});

interface Props {
  name: string;
  focused: boolean;
  type?: string;
  size?: number;
  testID?: string;
}

function Shared(props: Props) {
  const iconSize = props.size || DEFAULT_ICON_SIZE;

  if(props.type && props.type === 'MaterialIcons') {
    return (
      <Icon.MaterialIcons
        testID={props.testID}
        name={props.name}
        size={iconSize}
        style={styles.icon}
        color={props.focused ? COLOR_TABICON_SELECTED : COLOR_TABICON_DEFAULT}
      />
    );
  }

  if(props.type && props.type === 'AntDesign') {
    return (
      <Icon.AntDesign
        testID={props.testID}
        name={props.name}
        size={iconSize}
        style={styles.icon}
        color={props.focused ? COLOR_TABICON_SELECTED : COLOR_TABICON_DEFAULT}
      />
    );
  }

  return (
    <Icon.Ionicons
      testID={props.testID}
      name={props.name}
      size={iconSize}
      style={styles.icon}
      color={props.focused ? COLOR_TABICON_SELECTED : COLOR_TABICON_DEFAULT}
    />
  );
}

export default Shared;
