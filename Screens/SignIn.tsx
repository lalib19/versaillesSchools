import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};


export default function SignIn() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <View>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        email="email"
      />
      {errors.email && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        password="password"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    borderRadius: 5,

  }
})