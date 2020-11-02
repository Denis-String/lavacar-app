import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

import Home from '../pages/Home';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import FinishAccount from '../pages/CreateAccount/FinishAccount';
const {Navigator, Screen} = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home} />
        <Screen name="Login" component={Login} />
        <Screen name="CreateAccount" component={CreateAccount} />
        <Screen name="FinishAccount" component={FinishAccount} />
      </Navigator>
    </NavigationContainer>
  );
}
export default AppStack;
