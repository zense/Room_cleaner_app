//'use strict';
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {Actions} from 'react-native-router-flux';


export default class ScanScreen extends Component {

  constructor(props) {
      super(props)
      this.state = { qrscan : "" }
  }
  onSuccess(e) {
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
    this.setState({qrscan: e.data});
    if (this.qrscan == "BH0132")
    {
        // Record room cleaning in the database
    }
    else
    {
        Alert.alert(
            'Invalid QR code',
            'Go back and try scanning again',
            [
              //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => Actions.scanner()},
              {text: 'OK', onPress: () => Actions.prescanner()},
            ],
            { cancelable: false }
          )
    }
  }
  onPressButton() {
      
    Alert.alert(
        'Go back',
        'Pressing OK will cancel the scanning!',
        [
          //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {text: 'Cancel', onPress: () => Actions.scanner()},
          {text: 'OK', onPress: () => Actions.prescanner()},
        ],
        { cancelable: false }
      )
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText}>
            { /* Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code. */}
            Scan the QR code on with the cleaning agent to register your room cleaning.    
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable} onPress={this.onPressButton}>
            <Text style={styles.buttonText}>Go back</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

