import React, { useReducer } from 'react';
import { AppContext } from '../contexts';
import { User } from '../types';
import { ThemeType } from '../theme';

const AppConsumer = AppContext.Consumer;

interface Action {
  type: 'change-theme-mode';
  payload: any;
}

interface Props {
  children?: any;
}

interface State {
  theme: ThemeType;
}

const initialState: State = {
  theme: ThemeType.LIGHT,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'change-theme-mode':
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
  const value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppConsumer, AppProvider, AppContext };
