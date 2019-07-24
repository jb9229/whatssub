import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import { AppProvider as Provider } from './providers';
import SwitchNavigator from './components/navigation/SwitchNavigator';
import { ThemeType } from './types';

const App = () => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.LIGHT);
  const getCurrentThemeType = async () => {
    const value = await AsyncStorage.getItem('theme') as ThemeType;
    if (value && value !== ThemeType.LIGHT) {
      setTheme(value);
    }
  };

  useEffect(() => {
    Font.loadAsync({
      'spoqa-han-sans-bold':
        require('../assets/fonts/SpocaHanSans/SpoqaHanSans-Bold.ttf'),
      'spoqa-han-sans-regular':
        require('../assets/fonts/SpocaHanSans/SpoqaHanSans-Regular.ttf'),
    });
    getCurrentThemeType();
  }, []);

  return (
    <Provider theme={theme}>
      <SwitchNavigator />
    </Provider>
  );
};

export default App;
