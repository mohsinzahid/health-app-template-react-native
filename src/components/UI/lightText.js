import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const lightText = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
            <View style = {styles.button}>
                <Text style={styles.skipText}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        width: '100%',
    },
    skipText : {
        fontSize : 13,
        color : "#A9A9A9",
    }
});

export default lightText;
