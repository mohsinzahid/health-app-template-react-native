import React from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    Image,
    ScrollView,
    Button,
    TouchableOpacity,
    Platform,
} from 'react-native';

import Input from '../../components/UI/Input';
import Tips from '../../data/dummy-data';
import LightText from '../../components/UI/lightText';
import {WP,HP} from '../../modules/responsive/responsive';

const AuthScreen = props => {
    return (

        /*<ScrollView contentContainerStyle={{flexGrow: 1}}>*/
        <View style={styles.container}>
            <Image style={styles.headerImage} source={require('../../assets/images/header.png')}/>
            <Image style={styles.footerImage} source={require('../../assets/images/footer.png')}/>
            <KeyboardAvoidingView
                style={styles.screen}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Text style={styles.welcome}>Welcome</Text>
                <View style={styles.authContainer}>
                    <Input
                        id="email"
                        keyboardType="email-address"
                        required
                        email
                        autoCapitalize="none"
                        errorText="Please enter a valid email address."
                        onInputChange={() => {
                        }}
                        initialValue=""
                        placeholder="Enter Email"
                        placeholderTextColor="#A9A9A9"
                        style={styles.Input}

                        // style={{ borderWidth : 1, borderColor : 'black'}}
                    />
                    <Input
                        id="password"
                        // label="Password"
                        keyboardType="default"
                        secureTextEntry
                        required
                        minLength={5}
                        autoCapitalize="none"
                        errorText="Please enter a valid password."
                        onInputChange={() => {
                        }}
                        initialValue=""
                        style={styles.Input}
                        placeholder="Enter password"
                        placeholderTextColor="#A9A9A9"
                    />
                    <LightText onPress={() => {}}
                               text='Forgot you Password?'
                               style={styles.lightText}
                    />
                    <TouchableOpacity
                        style={styles.loginButton}
                        activeOpacity={.5}
                        onPress={() => {
                        }}
                    >
                        <Text style={styles.loginText}> Login </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    /*</ScrollView>*/
)
    ;
};

AuthScreen.navigationOptions = navData => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width : '100%',
        // borderWidth: 1,
        // borderColor: 'black',
        // margin : 10
        alignItems: 'center',
        // backgroundColor : '#E6E6E6'
    },
    authContainer: {
        // top: '20%',
        // marginTop : HP(),
        width: '100%',
        // maxWidth: 400,
        // maxHeight: 400,
        padding: WP(5),
        alignItems: 'center',
        // justifyContent: 'center',
    },
    headerImage: {
        // height: '25%',
        // width: '105%',
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
        // Top: '25%',
        marginTop: HP(20),
        fontSize: 40,
        // width : '75%',
        // height : '10%'
    },
    Input: {
        marginTop: 15,
        // width : '100%'
    },
    lightText: {
        marginTop: WP(2),
        // alignItems : 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        borderRadius: 15,
        backgroundColor: '#000000',
        alignItems: 'center',
        padding: 10,
        marginTop: 15,
    },
    loginText: {
        color: '#ffffff',
        fontFamily: 'Helvetica Textbook LT Bold',

    },
});

export default AuthScreen;
