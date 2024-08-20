import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles';
import HomeScreen from './screens/HomeScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import FeedScreen from './screens/FeedScreen';
import UpdateUserDataScreen from './screens/UpdateUserDataScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import OtherUserProfileScreen from './screens/OtherUserProfileScreen';

const Stack = createNativeStackNavigator();

// TODO: Saber quais são os dados necessários para a criação da conta assim como
//       exibição, assim como informações sobre o feed(likes, retweets) se for pra ter
export default function App() {
  return (
    <NavigationContainer style={ styles.container }>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: "Tela inicial" }} component={HomeScreen} />
        <Stack.Screen name="Login" options={{ title: "Login" }} component={LoginScreen} />
        <Stack.Screen name="Registration" options={{ title: "Registro" }} component={RegistrationScreen} />
        <Stack.Screen name="Feed" options={{ title: "Feed" }} component={FeedScreen} />
        <Stack.Screen name="CreatePost" options={{ title: "Criar post" }} component={CreatePostScreen} />
        <Stack.Screen name="UpdateUserData" options={{ title: "Atualizar dados" }} component={UpdateUserDataScreen} />
        <Stack.Screen name="OtherUserProfile" options={{ title: "Perfil de usuário" }} component={OtherUserProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
