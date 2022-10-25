import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteParams} from '../App';

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Welcome !</Text>
        <View style={styles.body}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Sign In</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 20}}>Or</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Register Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:"center"
  },
  subcontainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '70%',
    width: '100%',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: "teal",
    fontWeight: "bold"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'salmon',
    padding: 15,
    margin: 15,
    height: 80,
    width: 160
  },
});
