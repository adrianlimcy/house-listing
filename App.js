import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './Screens/Home'
import Detail from './Screens/Detail'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {title: 'Home'}
  },
  Detail: {
    screen: Detail,
    navigationOptions: {title: 'Detail'}
  }
}, { initialRouteName: 'Home'})

export default createAppContainer(AppNavigator)
