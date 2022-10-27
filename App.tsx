import React, {type PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from './Screens/LogIn';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Schools from './Screens/Schools';
import Map from './Screens/Map';
import Home from './Screens/Home';

const Stack = createNativeStackNavigator<RouteParams>();

export type RouteParams = {
  LogIn: undefined;
  SignUp: undefined;
  SignIn: undefined;
  Home: undefined;
  Schools: undefined;
  Map: undefined;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Schools" component={Schools} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
