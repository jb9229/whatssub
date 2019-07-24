import React, { useEffect } from 'react';
import * as Font from 'expo-font';
import SwitchNavigator from './components/navigation/SwitchNavigator';

import { AppProvider as Provider } from './providers';

const App = () => {
  useEffect(() => {
    Font.loadAsync({
      'spoqa-han-sans-bold':
        require('../assets/fonts/SpocaHanSans/SpoqaHanSans-Bold.ttf'),
      'spoqa-han-sans-regular':
        require('../assets/fonts/SpocaHanSans/SpoqaHanSans-Regular.ttf'),
    });
  }, []);

  return (
    <Provider>
      <SwitchNavigator />
    </Provider>
  );
};

export default App;
