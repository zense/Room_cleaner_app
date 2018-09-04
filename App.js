import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Home from './src/components/screens/home';
import { Router, Scene, Actions} from 'react-native-router-flux'
import Login from './src/components/Login/Login'
import ScanScreen from './src/components/screens/qrscanner';
import LandingView from './src/components/Login/azurelogin';
import Tabbar from './src/components/screens/tabsscreen';

export default class App extends React.Component {
    // onBackPress(){
    //     if (Actions.currentScene === 'tabbar'){
    //         return false;
    //     }
    //     Actions.pop()
    //     return true;
    // }
    render() {
    return (
        <Router>

            <Scene key="root">
                <Scene
                    key="login"
                    component={Login}
                    title="Login"
                    hideNavBar
                    initial
                    />
                <Scene
                    key="home"
                    component={Home}
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
                <Scene
                    key="tabbar"
                    component={Tabbar}
                    title="Room Cleaning App"
                    renderLeftButton={()=>(null)}
                    hideBackImage
                    hideNavBar
                    //initial
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