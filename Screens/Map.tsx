import {StyleSheet, View} from 'react-native';
import React from 'react';
import MapComponent from '../Components/MapComponent';
import { RouteParams } from '../App';

export default function Map({route}) {
  return (
    <View style={styles.container}>
      <MapComponent coordinates={route.params} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});
