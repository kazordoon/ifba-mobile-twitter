import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EvilIcons } from '@expo/vector-icons';
import { Pressable, Image, TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';
import HomeScreen from './screens/HomeScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import FeedScreen from './screens/FeedScreen';
import UpdateUserDataScreen from './screens/UpdateUserDataScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import OtherUserProfileScreen from './screens/OtherUserProfileScreen';
import FollowersScreen from './screens/FollowersScreen';
import SearchUserScreen from './screens/SearchUserScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: 'Tela inicial' }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Login"
          options={{ title: 'Login' }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Registration"
          options={{ title: 'Registro' }}
          component={RegistrationScreen}
        />

        <Stack.Screen
          name="Feed"
          options={({ navigation }) => ({
            title: null,
            headerLeft: () => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Pressable
                  onPress={() => navigation.navigate('UpdateUserData')}
                >
                  <Image
                    style={styles.userIcon}
                    source={require('./assets/user.png')}
                  />
                </Pressable>
                <TouchableOpacity
                  style={{ marginLeft: 10, marginTop: 4 }}
                  onPress={() => navigation.navigate('SearchUser')}
                >
                  <EvilIcons name="search" size={50} color="black" />
                </TouchableOpacity>
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <EvilIcons name="close" size={50} color="black" />
              </TouchableOpacity>
            )
          })}
          component={FeedScreen}
        />

        <Stack.Screen
          name="CreatePost"
          options={{ title: 'Criar post' }}
          component={CreatePostScreen}
        />
        <Stack.Screen
          name="UpdateUserData"
          options={{ title: 'Atualizar dados' }}
          component={UpdateUserDataScreen}
        />
        <Stack.Screen
          name="OtherUserProfile"
          options={{ title: 'Perfil de usuário' }}
          component={OtherUserProfileScreen}
        />
        <Stack.Screen
          name="Followers"
          options={{ title: null }}
          component={FollowersScreen}
        />
        <Stack.Screen
          name="SearchUser"
          options={{ title: 'Buscar usuário' }}
          component={SearchUserScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
