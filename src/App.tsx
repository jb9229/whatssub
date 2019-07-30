import { InitialProviders } from './providers';
import React from 'react';
import SwitchNavigator from './components/navigation/SwitchNavigator';

const App = () => (
  <InitialProviders>
    <SwitchNavigator />
  </InitialProviders>
);

export default App;
