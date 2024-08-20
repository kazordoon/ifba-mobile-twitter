import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import commonStyles, { colors } from '../styles'

export default function RegistrationScreen({ navigation }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

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
        placeholder="E-mail"
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={email}
        onChangeText={setEmail}
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
        placeholder="Senha"
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        style={commonStyles.textInput}
      />
      <TouchableOpacity
        style={commonStyles.buttonBlack}
        onPress={() => navigation.navigate('Feed')}
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
