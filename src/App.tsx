import React from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { Platform, StatusBar, StyleSheet, View, Text, Dimensions, AsyncStorage, Alert } from 'react-native';
import SwitchNavigator from './components/navigation/SwitchNavigator';

import { AppProvider as Provider } from './providers';
import { firebaseConfig as firebaseConfigReal } from '../config';
import { firebaseConfig as firebaseConfigSample } from '../config.sample';

let firebaseConfig = firebaseConfigReal;

if (!firebaseConfig) {
  firebaseConfig = firebaseConfigSample;
}

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const settings = {
  // timestampsInSnapshots: true,
};
firestore.settings(settings);

const App = () => {
  return (
    <Provider>
      <SwitchNavigator />
    </Provider>
  );
};

export default App;
