import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import MapComponent from '../Components/MapComponent';

export default function Map() {
  return (
    <View style={styles.container}>
      <MapComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
      },
});
