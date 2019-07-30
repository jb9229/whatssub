import * as Font from 'expo-font';

import React, { useEffect, useReducer } from 'react';

import { AsyncStorage } from 'react-native';
import { ThemeType } from '../types';

interface Context {
  state: State;
  changeTheme: (theme?: ThemeType) => void;
}
const AppContext = React.createContext<Context>(null);
const AppConsumer = AppContext.Consumer;

interface ChangeThemeTypeAction {
  type: 'change-theme-type-mode';
  payload: {
    theme?: ThemeType;
  };
}

interface Props {
  theme?: ThemeType;
  children?: any;
}

interface State {
  theme?: ThemeType;
}

export const initialState: State = {
  theme: ThemeType.LIGHT,
};

const reducer = (state: State, action: ChangeThemeTypeAction) => {
  switch (action.type) {
    case 'change-theme-type-mode':
      // if payload.theme doesn't exist, toggle
      if (!action.payload.theme) {
        return {
          ...state,
          theme:
            state.theme === ThemeType.LIGHT
              ? ThemeType.DARK
              : ThemeType.LIGHT,
        };
      }
      // else change it with payload.theme
      return {
        ...state,
        theme: action.payload.theme,
      };
    default:
      return state;
  }
};

function AppProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // by encapsulating dispatch, it is easier to use (such as passing through screenProps)
  const changeTheme: (theme?: ThemeType) => void = (theme) => {
    dispatch({
      type: 'change-theme-type-mode',
      payload: {
        theme,
      },
    });
  };

  // initialize theme
  useEffect(() => {
    changeTheme(props.theme ? props.theme : initialState.theme);
  }, [props.theme]);

  // Load font and then use saved theme from local storage
  const getCurrentThemeType = async () => {
    const value = (await AsyncStorage.getItem('theme')) as ThemeType;
    value && changeTheme(value);
  };
  useEffect(() => {
    Font.loadAsync({
      'spoqa-han-sans-bold': require('../../assets/fonts/SpocaHanSans/SpoqaHanSans-Bold.ttf'),
      'spoqa-han-sans-regular': require('../../assets/fonts/SpocaHanSans/SpoqaHanSans-Regular.ttf'),
    });
    getCurrentThemeType();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('theme', state.theme);
  }, [state.theme]);

  return (
    <AppContext.Provider
      value={{
        state,
        changeTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppConsumer, AppProvider, AppContext };
