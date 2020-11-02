import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

import Home from '../pages/Home';
import Login from '../pages/Login';
const {Navigator, Screen} = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home} />
        <Screen name="Login" component={Login} />
        {/* <Screen name="Login" component={Login} /> */}
        {/* <Screen name="Home" component={Home} /> */}
      </Navigator>
    </NavigationContainer>
  );
}
export default AppStack;
