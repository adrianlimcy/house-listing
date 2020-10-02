import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from './Screens/Home'
import Detail from './Screens/Detail'
import Settings from './Screens/Setting'

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {title: 'Home'}
  },
  Detail: {
    screen: Detail,
    navigationOptions: {title: 'Detail'}
  }
})

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {title: 'Settings'}
  }
})

const AppNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack
},  { initialRouteName: 'Home'})

export default createAppContainer(AppNavigator)
