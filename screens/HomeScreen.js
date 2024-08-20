import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={ styles.container }>
      <Text style={styles.title}>Bem-vindo(a) ao Papacapim!</Text>
      <View>
      <TouchableOpacity
          style={styles.buttonBlack}
          onPress={() => navigation.navigate('Login')}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Entrar com sua conta</Text>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity
        style={styles.buttonWhite}
          onPress={() => navigation.navigate('Registration')}
          underlayColor='#fff'>
          <Text style={styles.registrationText}>Novo por aqui? Crie uma conta.</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
