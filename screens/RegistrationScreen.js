import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import styles from './styles';

export default function RegistrationScreen() {
  return (
    <View style={ styles.container }>
      <Text style={styles.title}>Registro</Text>
      <StatusBar style="auto" />
    </View>
  );
}
