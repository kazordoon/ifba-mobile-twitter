import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function FollowersScreen({ navigation, route }) {
  const { followers } = route.params;

  async function handleProfileNavigation(follower) {
    const ownUsername = await AsyncStorage.getItem('username');
    if (follower.follower_login.toLowerCase() === ownUsername)
      return navigation.navigate('OwnProfile');

    navigation.navigate('OtherUserProfile', {
      username: follower.follower_login
    });
  }

  return (
    <ScrollView style={styles.page}>
      {followers.map((follower) => (
        <TouchableOpacity
          style={{ marginTop: 20 }}
          key={follower.follower_login}
          onPress={() => handleProfileNavigation(follower)}
        >
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(100, 100, 100, 0.8)'
            }}
          >
            <Text style={styles.name}>{follower.follower_login}</Text>
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
  name: {
    fontSize: 24,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 15,
    fontWeight: '600',
    color: '#000'
  }
});
