import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import useApiData from '../api/useApiData';
import Card from '../Components/Card';

const Schools = () => {
  //get All information from API
  const { data, isLoaded } = useApiData(
    'https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?where=code_postal%3D%2278000%22&limit=100&offset=0',
  );

  if (!isLoaded) {
    return <ActivityIndicator />;
  }
  //filter data and return seclected data
  // const [selected, setSelected] = React.useState(filters[0]);
  // const [filters, setFilters] = React.useState([
  //   { label: '' },
  //   { label: 'A' },
  //   { label: 'B' },
  //   { label: 'C' },
  // ]);

  const schoolfilter = data.filter(isfiltered => isfiltered.record.fields.type_etablissement === "Ecole" && "Lycée");
  console.log("school name" + schoolfilter);

  return (
    <View style={{ flex: 1, padding: 5 }}>
      <FlatList
        data={schoolfilter}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card
            nom_etabli={item.record.fields.nom_etablissement}
            type_etabli={item.record.fields.type_etablissement}
            statut={item.record.fields.statut_public_prive}
            adresse1={item.record.fields.adresse_1}
            adresse3={item.record.fields.adresse_3}
            key={item.id}
          />
        )}
      />
    </View>
  );
};

export default Schools;