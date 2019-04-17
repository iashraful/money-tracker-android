import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import WalletScreen from '../screens/WalletScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TransactionScreen from '../screens/TransactionScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

const WalletStack = createStackNavigator({
    Home: WalletScreen,
});

const SettingStack = createStackNavigator({
    Home: SettingsScreen,
});

const TransactionStack = createStackNavigator({
    Home: TransactionScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios' ? 'ios-home' : 'md-home'
            }
        />
    ),
};

WalletStack.navigationOptions = {
    tabBarLabel: 'Wallet',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios' ? 'ios-wallet' : 'md-wallet'
            }
        />
    ),
};

SettingStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'
            }
        />
    ),
};

TransactionStack.navigationOptions = {
    tabBarLabel: 'Transaction',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios' ? 'ios-business' : 'md-business'
            }
        />
    ),
};


export default createBottomTabNavigator({
    HomeStack,
    TransactionStack,
    WalletStack,
    SettingStack,
});
