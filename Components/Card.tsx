import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
        <View style={styles.school}>
      <Text>nom_etablissement</Text>
      <Text>type_etablissement</Text>
        </View>
        <Text>statut_public_prive</Text>
        </View>
      <Text>adresse_1</Text>
      <Text>adresse_3</Text>
      
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#FFFFFF',
        borderColor: 'black',
        borderWidth: 1,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    school: {}
})