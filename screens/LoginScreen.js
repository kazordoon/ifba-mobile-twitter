import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from '../styles';

export default function LoginScreen() {
  return (
    <View style={ styles.container }>
      <Text style={styles.title}>Login</Text>
      <StatusBar style="auto" />
    </View>
  );
}
