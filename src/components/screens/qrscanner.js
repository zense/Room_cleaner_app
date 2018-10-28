//'use strict';
import React, { Component } from 'react';
import Dialog from "react-native-dialog";
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    Alert,
    View,
} from 'react-native';
import Stars from 'react-native-stars-rating';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Actions} from 'react-native-router-flux';


export default class ScanScreen extends Component {

    constructor(props) {
        super(props)
        this.state = { qrscan: "BH132", visible: false }
        this.handleRating=this.handleRating.bind(this);
    }
    onSuccess(e) {
        console.log(e.data);
        // Linking
        //   .openURL(e.data)
        //   .catch(err => console.error('An error occured', err));
        // this.setState({qrscan: e.data});
        console.log(this.state.qrscan)
        if (String(e.data).localeCompare(this.state.qrscan) == 0)
        {
            // console.log(this.state.qrscan);
            Alert.alert(
                'Done!',
                'Room cleaning successfully registered!',  
                [          
                {text: 'OK', onPress: () => this.setState({visible:true})},
                ],
                { cancelable: false }
            )             // Record room cleaning in the database
        }
        else
        {
            Alert.alert(
                'Invalid QR code',
                'Go back and try scanning again',
                [
                //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => Actions.scanner()},
                {text: 'OK', onPress: () => Actions.tabbar()},
                ],
                { cancelable: false }
            )
        }
    }


//    showRatings()
//     {
//         return(
            
//         )
//     } 

    onPressButton() {
        
        Alert.alert(
            'Go back',
            'Pressing OK will cancel the scanning!',
            [
            //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => Actions.scanner()},
            {text: 'OK', onPress: () => Actions.tabbar()},
            ],
            { cancelable: false }
        )
    }

    handleRating(){
        this.setState({visible:false}, Actions.tabbar());
        // Actions.tabbar();
    }

    render() {
        console.log(1)
        return (
            <View style = {{flex:1}}>
                <QRCodeScanner
                onRead={(e)=>{this.onSuccess(e)}}
                topContent={
                <Text style={styles.centerText}>
                    Scan the QR code on with the cleaning agent to register your room cleaning.    
                </Text>
                }
                bottomContent={
                <TouchableOpacity style={styles.buttonTouchable} onPress={this.onPressButton}>
                    <Text style={styles.buttonText}>Go back</Text>
                </TouchableOpacity>
                }
                />
                <Dialog.Container visible = {this.state.visible}>
                <View>
                    <Dialog.Title>
                        Rate Cleaning
                    </Dialog.Title>
                    <Dialog.Description>
                        Please provide a rating to the service provided by the cleaning staff
                    </Dialog.Description>
                    <Stars
                        isActive={true}
                        rateMax={5}
                        isHalfStarEnabled={false}
                        onStarPress={(rating) => console.log(rating)}
                        rate={0}
                        size={30}
                    />
                    </View>
                    <Dialog.Button label="Submit" onPress={()=>this.handleRating()} />
                </Dialog.Container>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
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

