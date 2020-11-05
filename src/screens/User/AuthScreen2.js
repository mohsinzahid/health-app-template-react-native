/*
import React from 'react';
import {View, Text, KeyboardAvoidingView, StyleSheet, Image, ScrollView} from 'react-native';

import Input from '../../components/UI/Input';
import Tips from '../../data/dummy-data';
import LightText from '../../components/UI/lightText';

const AuthScreen = props => {
    return (
        // <KeyboardAvoidingView
        //     // keyboardVerticalOffset={60}
        //     // style = {{alignItems : 'center'}}
        //     style={styles.screen}
        //
        // >
        // <ScrollView style={styles.screen}>
                <View style={styles.screen}>

            <Image style={styles.headerImage} source={require('../../assets/images/header.png')}/>
            {/!*<Image style={styles.welcomeImage} source={require('../../assets/images/Welcome.png')}/>*!/}
            <Image style={styles.footerImage} source={require('../../assets/images/footer.png')}/>
            <Text style={styles.welcome}>Welcome</Text>
            <View style={styles.authContainer}>
                <Input
                    id="email"
                    // label="E-Mail"
                    keyboardType="email-address"
                    required
                    email
                    autoCapitalize="none"
                    errorMessage="Please enter a valid email address."
                    onInputChange={() => {
                    }}
                    initialValue=""
                />
                <Input
                    id="password"
                    // label="Password"
                    keyboardType="default"
                    secureTextEntry
                    required
                    minLength={5}
                    autoCapitalize="none"
                    errorMessage="Please enter a valid password."
                    onInputChange={() => {
                    }}
                    initialValue=""
                    style={styles.Input}
                />
                <LightText onPress={() => {
                }}
                           text='Forgot you Password?'
                           style={styles.lightText}/>
            </View>
            </View>
        // </ScrollView>

        /!*</KeyboardAvoidingView>*!/
    );
};

AuthScreen.navigationOptions = navData => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems : 'center',
        // backgroundColor : '#E6E6E6'
    },
    authContainer: {
        top: '25%',
        width: '90%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerImage: {
        height: '25%',
        width: '105%',
        position: 'absolute',
    },
    footerImage: {
        height: '140%',
        width: '100%',
        top: '15%',
        position: 'absolute',
    },
    welcome: {
        fontFamily: 'Helvetica Textbook LT Bold',
        top: '25%',
        fontSize: 40,
        // width : '75%',
        // height : '10%'
    },
    Input: {
        marginTop: 20,
    },
    lightText: {
        marginTop: 15,
    },
});

export default AuthScreen;
*/
