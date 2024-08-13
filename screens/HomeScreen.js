import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TouchableOpacity } from 'react-native';

import styles from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={ styles.container }>
      <Text style={styles.title}>Bem-vindo(a) ao Papacapim!</Text>
      <View>
      <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => navigation.navigate('Login')}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity
          onPress={() => navigation.navigate('Registration')}
          underlayColor='#fff'>
          <Text style={styles.registrationText}>Novo por aqui? Crie uma conta.</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
