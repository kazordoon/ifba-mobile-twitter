import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from '../styles'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a) ao Papacapim!</Text>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={[styles.buttonBlack, { width: 300 }]}
          onPress={() => navigation.navigate('Login')}
          underlayColor="#fff"
        >
          <Text style={styles.loginText}>Entrar com sua conta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonWhite, { width: 300 }]}
          onPress={() => navigation.navigate('Registration')}
          underlayColor="#fff"
        >
          <Text style={styles.registrationText}>
            Novo por aqui? Crie uma conta.
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}
