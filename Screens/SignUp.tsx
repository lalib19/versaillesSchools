import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteParams} from '../App';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormData = {
  firstName:string;
  lastName:string;
  email: string;
  password: string;
};

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(20).required(),
  })
  .required();

export default function SignIn() {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate('Schools');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName?.message && (
        <Text style={styles.error}>{errors.firstName.message}</Text>
      )}
      <Text style={styles.label}>Last Name</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 30,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      {errors.lastName?.message && (
        <Text style={styles.error}>{errors.lastName.message}</Text>
      )}
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 30,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email?.message && (
        <Text style={styles.error}>{errors.email.message}</Text>
      )}

      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 30,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password?.message && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={{color: 'white', fontSize: 20}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 30
  },
  error: {
    color: 'red',
  },
  button: {
    marginVertical: 10,
    width: '80%',
    height: 50,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
