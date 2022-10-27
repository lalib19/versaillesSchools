import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteParams} from '../App';
import CustomButton from '../Components/CustomButton';

export default function LogIn() {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Welcome !</Text>
        <View style={styles.body}>
          <CustomButton
            title={'Sign In'}
            size={8}
            onPress={() => navigation.navigate("SignIn")}
          />
          <Text style={{fontSize: 30, margin: 10}}>Or</Text>
          <CustomButton
            title={'Sign Up'}
            size={8}
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
          <CustomButton
            title={'Map'}
            size={8}
            onPress={() => navigation.navigate("Map")}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    color: 'teal',
    fontWeight: 'bold',
  },
});
