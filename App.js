import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={ styles.container }>
      <Text style={styles.title}>Bem-vindo(a) ao Papacapim!</Text>
      <View>
        <Button title=">">&gt;</Button>
        <Text style={styles.colorWhite}>Entre aqui</Text>
      </View>
      <View>
        <Button title=">">&gt;</Button>
        <Text style={styles.colorWhite}>Novo por aqui? Crie uma conta.</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
