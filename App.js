import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Account from './src/components/pages/Account';
import Workshops from './src/components/pages/Workshops';

export default function App() {
  return (
    <View style={styles.container}>
      <Account/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
