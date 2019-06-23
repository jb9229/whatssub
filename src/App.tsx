import React from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { Platform, StatusBar, StyleSheet, View, Text, Dimensions, AsyncStorage, Alert } from 'react-native';
import SwitchNavigator from './components/navigation/SwitchNavigator';

import { AppProvider as Provider } from './providers';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

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
