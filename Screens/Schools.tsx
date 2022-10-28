import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useApiData from '../api/useApiData';
import Card from '../Components/Card';

const Schools = () => {
  const [filter, setFilter] = useState('All');
  const [schooltype, setSchooltype] = useState('All');
  //get All information from API
  const { data, isLoaded } = useApiData(
    'https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?where=code_postal%3D%2278000%22&limit=100&offset=0',
  );

  if (!isLoaded) {
    return <ActivityIndicator />;
  }
  //filter data and return seclected data




  let filterused: string;
  if (filter === "Lycée") {
    filterused = "Lycée"
  } else if (filter === 'Ecole') {
    filterused = "Ecole"
  } else if (filter === 'Collège') {
    filterused = "Collège"
  } else {
    filterused = "All"
  };

  let filtertype: string;
  if (schooltype === "Public") {
    filtertype = "Public"
  } else if (schooltype === 'Privé') {
    filtertype = "Privé"
  } else {
    filtertype = "All"
  };


  let schoollist;
  if (filter === 'All') {
    schoollist = data
  } else {
    schoollist = data.filter(isfiltered => isfiltered.record.fields.type_etablissement == filterused);
  };

  let schoollist1;
  if (filter !== 'All') {
    schoollist1 =  schoollist.filter(isfiltered => isfiltered.record.fields.statut_public_prive == filtertype);
  } else {
    schoollist1 = schoollist
  };

  return (
    <View style={{ flex: 1, padding: 5 }}>
      <View style={styles.togglebar}>
          <View style={styles.togglebutton}>
            <TouchableOpacity onPress={() => setFilter('All')}>
              <Text>ALL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.togglebutton}>
            <TouchableOpacity onPress={() => setFilter('Ecole')}>
              <Text>ECOLE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.togglebutton}>
            <TouchableOpacity onPress={() => setFilter('Collège')}>
              <Text>COLLEGE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.togglebutton}>
            <TouchableOpacity onPress={() => setFilter('Lycée')}>
              <Text>LYCEE</Text>
            </TouchableOpacity>
        </View>
          <View style={styles.togglebutton}>
            <TouchableOpacity onPress={() => setSchooltype('Public')}>
              <Text>PUBLIC</Text>
            </TouchableOpacity>
        </View>
          <View style={styles.togglebutton}>
            <TouchableOpacity onPress={() => setSchooltype('Privé')}>
              <Text>PRIVE</Text>
            </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={schoollist1}
        keyExtractor={(item, index) => item.record.fields.identifiant_de_l_etablissement}
        renderItem={({ item }) => (
          <Card
            nom_etabli={item.record.fields.nom_etablissement}
            type_etabli={item.record.fields.type_etablissement}
            statut={item.record.fields.statut_public_prive}
            adresse1={item.record.fields.adresse_1}
            adresse3={item.record.fields.adresse_3}
            id={item.id}
          />
        )}
      />
    </View>
  );
};

export default Schools;

const styles = StyleSheet.create({
  togglebar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    backgroundColor: 'white',
  },
  togglebutton: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    paddingLeft: 6,
    paddingRight: 6,


  },
})