import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import PapacapimAPI from '../services/PapacapimAPI'
import commonStyles, { colors } from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    await AsyncStorage.setItem('username', username);
    const token = await PapacapimAPI.authUser(username, password);
    if (token) {
      await AsyncStorage.setItem('token', token);
      return navigation.navigate('Feed')
    };

    Alert.alert('Não foi possível se autenticar, tente novamente.');
  }

  return (
    <View style={styles.container}>
      <Text style={commonStyles.title}>Entre com sua conta</Text>
      <TextInput
        placeholder="Nome de usuário"
        autoCapitalize="none"
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={username}
        onChangeText={setUsername}
        style={commonStyles.textInput}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Senha"
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={password}
        onChangeText={setPassword}
        style={commonStyles.textInput}
      />
      <TouchableOpacity style={commonStyles.buttonBlack} onPress={handleLogin}>
        <Text style={commonStyles.buttonBlackText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBg,
    flex: 1,
    justifyContent: 'center',
    padding: 24
  }
});
