import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
import PapacapimAPI from '../services/PapacapimAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SearchUserScreen({ navigation }) {
  const [searchParam, setSearchParam] = useState('');
  const [users, setUsers] = useState([]);

  async function handleProfileNavigation(user) {
    const ownUsername = await AsyncStorage.getItem('username');
    if (user.login.toLowerCase() === ownUsername)
      return navigation.navigate('OwnProfile');

    return navigation.navigate('OtherUserProfile', {
      username: user.login
    });
  }

  async function findUsers() {
    const foundUsers = await PapacapimAPI.findUsers(searchParam);

    setUsers(foundUsers);
  }

  return (
    <ScrollView style={styles.page}>
      <TextInput
        placeholder="Buscar usuário..."
        style={styles.search}
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={searchParam}
        onChangeText={setSearchParam}
      ></TextInput>
      <Button title="Buscar" onPress={findUsers}>
        Buscar
      </Button>
      {users.map((user) => (
        <TouchableOpacity
          style={{ marginTop: 20 }}
          key={user.login}
          onPress={() => handleProfileNavigation(user)}
        >
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(100, 100, 100, 0.8)'
            }}
          >
            <Text style={styles.name}>{user.login}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  search: {
    borderWidth: 1,
    borderColor: 'rgba(100, 100, 100, 0.5)',
    fontSize: 18,
    borderRadius: 10,
    margin: 5,
    padding: 5,
    color: '#444'
  },
  name: {
    fontSize: 24,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 15,
    fontWeight: '600',
    color: '#000'
  }
});
