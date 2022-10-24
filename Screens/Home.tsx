import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';




export default function Home() {
  const navigation = useNavigation();


  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => {
        navigation.navigate("SignIn")
      }}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}