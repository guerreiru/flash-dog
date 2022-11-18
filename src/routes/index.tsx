// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

const { Navigator, Screen } = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name='Home' component={Home} />
        <Screen name='Login' component={Login} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Router;
