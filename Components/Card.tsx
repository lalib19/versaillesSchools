import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export type cardprops = {
    nom_etabli: string;
    type_etabli: string;
    statut: string;
    adresse1: string;
    adresse3: string;
    id: string;
}

const Card = ({nom_etabli, type_etabli, statut, adresse1, adresse3,id}:cardprops) => {
    return (
        <View style={styles.container} key={id}>
            <View style={styles.top}>
                <View style={styles.school}>
                    <Text style={{flexWrap: 'wrap'}}>{nom_etabli}</Text>
                    <Text>{type_etabli}</Text>
                </View>
                <View style={styles.schoolrigth}>
                    <Text>{statut}</Text>
                </View>
            </View>
            <View style={styles.address}>
                <Text>{adresse1}</Text>
                <Text>{adresse3}</Text>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: '#FFFFFF',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
     
    },
    school: {
        paddingLeft: 10,
        paddingTop: 10,
        
    },
    schoolrigth: {
        paddingRight: 10,
        paddingTop: 10,
    },
    address: {
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
})