import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StartScreen from '../screens/shop/StartScreen';
import AuthScreen from '../screens/User/AuthScreen';

const StartNavigator = createStackNavigator({
    StartScreen: StartScreen
});

const AuthNavigator = createStackNavigator({
    Auth : AuthScreen
});

const MainNavigator = createSwitchNavigator({
    Start : StartNavigator,
    Auth : AuthNavigator
})

export default createAppContainer(MainNavigator);
