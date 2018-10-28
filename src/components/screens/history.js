import React, { Component } from 'react';
import {Text, View, Stylesheet, FlatList} from 'react-native'
import Stars from 'react-native-stars-rating';



export default class DummyHistory extends Component
{
    constructor(props)
    {
        super(props);
        this.data = ["Room Cleaning 1", "Room Cleaning 2", "Room Cleaning 3"]
    }
    render()
    {
        return(
            <View>
                <Text> This is the page where history of room cleanings will be displayed </Text>
                <FlatList
                    data={[{key: "Room Cleaning 1"}, {key: "Room Cleaning 2"}]}
                    renderItem ={({item}) =><View>
                        <Text>{item.key}</Text>
                        <Stars
                            isActive={false}
                            rateMax={5}
                            isHalfStarEnabled={false}
                            onStarPress={(rating) => console.log(rating)}
                            rate={3}
                            size={30}
                        />
                    </View>}
                />
                {/* <Stars
                    isActive={true}
                    rateMax={5}
                    isHalfStarEnabled={false}
                    onStarPress={(rating) => console.log(rating)}
                    rate={3}
                    size={30}
                /> */}

            </View>
        )
    }
}

