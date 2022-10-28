import React, {createContext, useState, type PropsWithChildren} from 'react';
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
// | {longitude: number, latitude: number}
type AuthCtxProps = {
  authState: {
    id: string;
    signedIn: boolean;
  };
  setAuthState: (prop: AuthStateProps) => void;
};
type AuthStateProps = {
  id: string;
  signedIn: boolean;
};

export const AuthContext = createContext<AuthCtxProps>({
  authState: {id: '', signedIn: false},
  setAuthState: () => {},
});

const App = () => {
  const [authState, setAuthState] = useState<AuthStateProps>({
    id: '',
    signedIn: false,
  });

  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
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
    </AuthContext.Provider>
  );
};

export default App;
