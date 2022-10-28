import React, { useContext } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteParams} from '../App';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomButton from '../Components/CustomButton';
import { AuthContext } from '../App';

type FormData = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(20).required(),
  })
  .required();

  export default function SignIn() {
    // const {user, login} = useContext(UserContext)
    const [authState,setAuthState] = useContext<any>(AuthContext);
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    setAuthState({id: data.email, signedIn: true})
    navigation.navigate('Home');
    console.log(authState)

    // console.log("before " + user)
    // login(data.email)
    // console.log("after " + user)
  };

  return (
    <View style={styles.container}>
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
      <CustomButton
        type={'submit'}
        title={'Submit'}
        onPress={handleSubmit(onSubmit)}
      />
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
    marginBottom: 30,
  },
  error: {
    color: 'red',
  },
});
