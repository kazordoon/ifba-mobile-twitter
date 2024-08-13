import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={ styles.container }>
      <Text style={styles.title}>Bem-vindo(a) ao Papacapim!</Text>
      <View>
        <Button title="Entre aqui" onPress={() => navigation.navigate('Login')}>Entre aqui</Button>
      </View>
      <View>
        <Text style={styles.colorWhite} onPress={() => navigation.navigate('Registration')}>Novo por aqui? Crie uma conta.</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
