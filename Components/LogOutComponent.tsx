import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthContext, RouteParams} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function LogOutComponent() {
  const [authState, setAuthState] = useContext<any>(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  return (
    <TouchableOpacity
      style={styles.dot}
      onPress={() => {
        navigation.navigate('LogIn');
        setAuthState({id: '', signedIn: false});
        console.log(authState);
      }}>
      <Text style={{color: 'white'}}>Log Out</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  dot: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'salmon',
    borderRadius: 30,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
});
