import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Dashboard from './src/pages/Dashboard';


const Stack = createStackNavigator();

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // function isAuth() {
  //   if (isAuthenticated) { navigation.navigate('Dashboard') }
  // }

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }

  // useEffect(() => {
  //   isAuth();
  // },[]);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
