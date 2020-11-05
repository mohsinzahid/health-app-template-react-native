import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, Button} from "react-native";
import Dots from 'react-native-dots-pagination'; //https://github.com/tsepeti/react-native-dots-pagination

// import { SliderBox } from "react-native-image-slider-box";

import Tips from "../../data/dummy-data"
import LightText from '../../components/UI/lightText';


// console.log()

const StartScreen = props => {
    const [index, setIndex] = useState(0);

    const indexHandler = () => {
        if(index < 3)
            setIndex(index+1)
        else{
            props.navigation.navigate({
                routeName : 'Auth',
            })
        }


    }
    return (
        <View style={ styles.screen}>
            <Image style={styles.sliderImage} source={{uri : Tips[index].image}}/>
            {/*<Image style={styles.image} source={require('../../assets/images/intro.png')}/>*/}
            <Image style={styles.Downimage} source={require('../../assets/images/Path1950.png')}/>
            <Image style={styles.image} source={require('../../assets/images/Path2.png')}/>
            <View style={styles.dots}>
                <Dots length={4} active={index}
                      activeColor = "#69c77b"
                      passiveDotHeight = {8}
                      activeDotHeight = {10}
                      activeDotWidth = {12}
                />
            </View>
            <View style={styles.text}>
                <Text style={styles.header}>Best Tips for your diet</Text>
                <Text style={styles.body}>{Tips[index].tips}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <LightText onPress={() => {
                        props.navigation.navigate({
                            routeName : 'Auth',
                        })
                }}
                           text = 'Skip step'/>
                <View style = {styles.button}>
                    <Button title="Next" onPress={ indexHandler } color = "#69c77b" />
                </View>
            </View>
        </View>
    )
}

StartScreen.navigationOptions = navData => {
    return {
        headerShown: false
    }
};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
    },
    image :{
        height : '70%',
        width : '100%',
        position : 'absolute',
        top : "30%",
        right : 0,
        // borderWidth : 1,
        // borderColor : 'black'
    },
    Downimage : {
        height : '70%',
        width : '100%',
        position : 'absolute',
        top : "28%",
        right : 0,
        // borderWidth : 1,
        // borderColor : 'black'
    },
    text : {
        alignItems: 'center',

    },
    sliderImage : {
        height : '70%',
        width : '100%',
    },
    header : {
        fontSize : 16,
        fontWeight: "bold"
    },
    body : {
        fontSize : 10,
        color : "#A9A9A9",
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 20
    },
    buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%',
        paddingHorizontal : 10,
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20
    },
    button : {
        width: 100,
    },
    dots : {
        top: '25%',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    skipText : {
        fontSize : 13,
        color : "#A9A9A9",
    }
})

export default StartScreen ;
