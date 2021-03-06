import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    Alert,
    View,
  } from 'react-native';

import {Actions} from 'react-native-router-flux';




export default class Home extends Component{

    render()
    {
        return(
            <View style = {styles.titles}>
        <Text style={styles.centreText}>Press the button to launch the QR code scanner.</Text>
        <TouchableOpacity onPress = {()=> Actions.scanner()}> 
             <Text style={styles.buttonText}>Scan</Text>
        </TouchableOpacity>
        </View>
        )
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
    titles : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
  });
