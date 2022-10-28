import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthContext, RouteParams} from '../App';
import CustomButton from '../Components/CustomButton';
import LogOutComponent from '../Components/LogOutComponent';

export default function Home() {
  const [authState, setAuthState] = useContext<any>(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  return (
    <View style={styles.container}>
      {authState && <LogOutComponent/>}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Ici vous pourrez consulter la liste des écoles de Versailles
        </Text>
      </View>
      <View style={styles.navigatorContainer}>
        <View style={styles.navigator}>
          <Text style={styles.body}>Accéder à la liste des écoles </Text>
          <CustomButton
            title={'Liste'}
            type={'default'}
            onPress={() => {
              console.log(authState);
              navigation.navigate('Schools');
            }}
          />
        </View>
        <View style={styles.navigator}>
          <Text style={styles.body}>Accéder à la carte </Text>
          <CustomButton
            title={'Carte'}
            type={'default'}
            onPress={() => navigation.navigate('Map')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    width: '90%',
  },
  title: {fontSize: 30, textAlign: 'center', color: 'teal'},
  body: {fontSize: 20, textAlign: 'center', color: 'teal'},
  navigatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
    height: '60%',
    width: '100%',
  },
  navigator: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '50%',
    width: '90%',
    borderWidth: 5,
    borderColor: 'teal',
    borderRadius: 10,
    margin: '2%',
    backgroundColor: 'lavenderblush',
    elevation: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'salmon',
    padding: 15,
    height: 70,
    width: 140,
  },
});
