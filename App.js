import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Balance />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7F0',
  },
});
