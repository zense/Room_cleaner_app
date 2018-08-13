import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import ScanScreen from './src/components/screens/qrscanner';

export default class App extends React.Component {
  render() {
    return (
        <ScanScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});