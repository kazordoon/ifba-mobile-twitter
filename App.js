import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles';
import HomeScreen from './screens/HomeScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import FeedScreen from './screens/FeedScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={ styles.container }>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: "Tela inicial" }} component={HomeScreen} />
        <Stack.Screen name="Login" options={{ title: "Login" }} component={LoginScreen} />
        <Stack.Screen name="Registration" options={{ title: "Registro" }} component={RegistrationScreen} />
        <Stack.Screen name="Feed" options={{ title: "Feed" }} component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
