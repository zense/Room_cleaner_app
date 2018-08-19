import React, { Component } from 'react';
import {Text, View, Stylesheet, ListView} from 'react-native'

export default class DummyHistory extends Component
{
    render()
    {
        return(
            <View>
                <Text> This is the page where history of room cleanings will be displayed </Text>
                <ListView>
                    <Text> Room Cleaning 1 </Text>
                    <Text> Room Cleaning 2 </Text>
                    <Text> Room Cleaning 3 </Text>
                </ListView>
            </View>
        )
    }
}

