import { DefaultTheme } from 'styled-components';

export interface User {
  displayName: string;
  age: number;
  job: string;
}

export enum ThemeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
};

export interface ScreenProps {
  theme: DefaultTheme;
  changeTheme: () => void;
}
