import React, {type PropsWithChildren} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from './Screens/Home';
// import SignIn from './Screens/SignIn';
// import SignUp from './Screens/SignUp';
// import Schools from './Screens/Schools';
import Schools from './Screens/Schools';

// const Stack = createNativeStackNavigator<RouteParams>();

// export type RouteParams = {
//   Home: undefined;
//   SignUp: undefined;
//   SignIn: undefined;
//   Schools: undefined;
// };

const App = () => {
  return (
    <Schools/>
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={() => ({
    //       headerShown: false,
    //     })}>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="SignIn" component={SignIn} />
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //     <Stack.Screen name="Schools" component={Schools} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
