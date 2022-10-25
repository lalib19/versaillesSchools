import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';


const Schools = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState <any[]>([]);

  const getSchoollist = async () => {
     try {
      const response = await fetch('https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?where=code_postal%3D%2278000%22&limit=10&offset=0');
      const json = await response.json();
      setData(json.records);
      console.log(json.records);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getSchoollist();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.record.fields.nom_etablissement}</Text>
          )}
        />
      )}
    </View>
  );
};
export default Schools