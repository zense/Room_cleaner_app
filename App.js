import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import PreScanner from './src/components/screens/home';
import { Router, Scene} from 'react-native-router-flux'
import Login from './src/components/Login/Login'
import ScanScreen from './src/components/screens/qrscanner';
import LandingView from './src/components/Login/azurelogin';

export default class App extends React.Component {
  render() {
    return (
        <Router>

            <Scene key="root">
                <Scene
                    key="login"
                    component={Login}
                    title="Login"
                    initial
                    />
                <Scene
                    key="prescanner"
                    component={PreScanner}
                    title="Room Cleaning App"
                    />

                <Scene
                    key="scanner"
                    component={ScanScreen}
                    title="QR Scanner"
                    />
                <Scene
                    key="mslogin"
                    component={LandingView}
                    title="Login"
                    />
  
            </Scene>

        </Router>
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