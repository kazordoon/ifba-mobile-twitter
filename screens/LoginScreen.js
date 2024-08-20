import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import commonStyles, { colors } from '../styles'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Text style={commonStyles.title}>Entre com sua conta</Text>
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
      <TouchableOpacity
        style={commonStyles.buttonBlack}
        onPress={() => navigation.navigate('Feed')}
      >
        <Text style={commonStyles.buttonBlackText}>Entrar</Text>
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
