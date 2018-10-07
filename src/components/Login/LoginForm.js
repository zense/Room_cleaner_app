import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar} from 'react-native';
import {Actions, Router, Scene} from 'react-native-router-flux';

export default class LoginForm extends Component {
    constructor(props)
    {
        super(props);
        this.state = {roomNo: ""};
    }

    render() {
        return (
            <View style={styles.container}>
            <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={(e) =>this.setState({roomNo : e.data})} 
               autoCorrect={false} 
               keyboardType='number-pad' 
               returnKeyType="next" 
               placeholder='Room Number' 
               placeholderTextColor='rgba(225,225,225,0.7)' />
            {console.log(this.state.roomNo)}

        {/* <TextInput style = {styles.input}   
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Password' 
              placeholderTextColor='rgba(225,225,225,0.7)' 
              secureTextEntry/> */}

            <TouchableOpacity style={styles.buttonContainer} 
                    onPress={() => Actions.tabbar()} >
                 <Text  style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity> 
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
     padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
  }
)
