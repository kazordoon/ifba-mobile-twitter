import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native'
import React, { useState } from 'react'
import commonStyles, { colors } from '../styles'
import PapacapimAPI from '../services/PapacapimAPI'

export default function RegistrationScreen({ navigation }) {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  async function handleRegistration() {
    const statusCode = await PapacapimAPI.registerUser({
      login: username,
      name,
      password,
      password_confirmation: passwordConfirmation
    })

    if (statusCode === 201) return navigation.navigate('Login')

    Alert.alert('Não foi possível registrar uma nova conta, tente novamente.')
  }

  return (
    <View style={styles.container}>
      <Text style={commonStyles.title}>Registre sua conta</Text>
      <TextInput
        placeholder="Nome de usuário"
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={username}
        onChangeText={setUsername}
        style={commonStyles.textInput}
      />
      <TextInput
        placeholder="Nome"
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={name}
        onChangeText={setName}
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
      <TextInput
        secureTextEntry={true}
        placeholder="Confirmar senha"
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        style={commonStyles.textInput}
      />
      <TouchableOpacity
        style={commonStyles.buttonBlack}
        onPress={handleRegistration}
      >
        <Text style={commonStyles.buttonBlackText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBg,
    flex: 1,
    justifyContent: 'center',
    padding: 24
  }
})
