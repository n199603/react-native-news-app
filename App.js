import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { Providor } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Providor store={store}>
      <AppNavigator />;
    </Providor>
  );
}
