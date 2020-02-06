import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './src/store';
import {AppRouting} from "./src/routing/intex";
// React Native: App
export default function App() {
    return (
        // Redux: Global Store
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppRouting />
            </PersistGate>
        </Provider>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
