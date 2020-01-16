// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//   return (
//
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <Text>Navigation</Text>
//       <Text>Deep linking</Text>
//       <Text>Photo/Video</Text>
//       <Text>Push notifications/Custom android/ios</Text>
//       <Text>Animations</Text>
//     </View>
//   );
// }

// Imports: Dependencies
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
// Imports: Screens
import Counter from './src/screens/Counter';
// Imports: Redux Persist Persister
import { store, persistor } from './src/store';
// React Native: App
export default function App() {
    return (
        // Redux: Global Store
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Counter />
                <Text>Navigation</Text>
                <Text>Deep linking</Text>
                <Text>Photo/Video</Text>
                <Text>Push notifications/Custom android/ios</Text>
                <Text>Custom image picker</Text>
                <Text>Animations</Text>
                <Text>card/google payment</Text>
                <Text>sockets</Text>
                <Text>map navigation</Text>
                <Text>chatting</Text>
                <Text>broadcasting</Text>
                <Text>charts</Text>
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
