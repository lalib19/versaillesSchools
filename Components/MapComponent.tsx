import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker, Callout, Region} from 'react-native-maps';
import useApiData from '../api/useApiData';
import {RouteParams} from '../App';

export default function MapComponent({coordinates}) {
  const {data, isLoaded} = useApiData(
    'https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?where=code_postal%3D%2278000%22&limit=100&offset=0',
  );
  const [currentSchool, setCurrentSchool] = useState<any>();

  const onMarkerPressed = (marker: any) => {
    setCurrentSchool(marker);
  };

  if (!isLoaded) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        onPress={() => setCurrentSchool(undefined)}
        initialRegion={{
          latitude: 48.805 || coordinates.latitude,
          longitude: 2.14 || coordinates.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.07,
        }}>
        {data.map((marker, index) => {
          return (
            <Marker
              coordinate={{
                latitude: marker.record.fields.latitude,
                longitude: marker.record.fields.longitude,
              }}
              key={index}
              onPress={() => onMarkerPressed(marker)}>
            </Marker>
          );
        })}
      </MapView>
      {currentSchool && (
        <View style={styles.encart}>
          <Text style={styles.title}>
            {currentSchool.record.fields.nom_etablissement}
          </Text>
          <View style={styles.separer}></View>
          <View style={styles.body}>
            <Text>
              {currentSchool.record.fields.type_etablissement + ' '}
              {currentSchool.record.fields.statut_public_prive}
            </Text>
            <Text>Adresse: {currentSchool.record.fields.adresse_1}</Text>
            <Text>T??l??phone: {currentSchool.record.fields.telephone}</Text>
            {currentSchool.record.fields.web && (
              <Text>
                Site web:{' '}
                <Text
                  style={{color: 'blue', textDecorationLine: 'underline'}}
                  onPress={() =>
                    Linking.openURL(currentSchool.record.fields.web)
                  }>
                  {currentSchool.record.fields.web}
                </Text>
              </Text>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  callout: {
    flex: 1,
    borderRadius: 10,
  },
  encart: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 200,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    width: '90%',
    textAlign: 'left',
  },
  separer: {
    borderWidth: 0.2,
    width: '70%',
    height: 0.1,
  },
});
