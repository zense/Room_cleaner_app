import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import {Actions, Router, Scene} from 'react-native-router-flux';

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style = {styles.titles}>
        <Text style={styles.text}>Room Cleaning App</Text>
        </View>
        <View style={styles.loginContainer}>
            <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/cleaning.jpg')} />
        </View>
        <View style={styles.formContainer}>
            <LoginForm />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        color: '#00FF00',
        fontSize: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',

    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 800,
        height: 300,},
    titles : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    })