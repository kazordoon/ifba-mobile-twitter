import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { colors } from '../styles';

export default function RegistrationScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Registre sua conta</Text>
      <TextInput
        placeholder="Nome de usuário"
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="E-mail"
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
      secureTextEntry={true}
        placeholder="Senha"
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TextInput
      secureTextEntry={true}
        placeholder="Senha"
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Feed')}
      >
        <Text
          style={styles.buttonText}
        >
          Cadastrar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBg,
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  label: {
    color: '#fff',
    fontSize: 24,
    marginVertical: 5,
  },
  input: {
    color: '#000',
    borderColor: '#000',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    fontSize: 20,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#050A12',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});