import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RouteParams } from '../App';




export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("SignIn")
      }}>
        <Text style={{color: "white"}}>Sign In</Text>
      </TouchableOpacity>
      <Text>Or</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("SignUp")
      }}>
        <Text style={{color: "white"}}>Register Here</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "salmon",
    padding: 15,
    margin: 15
  }
})