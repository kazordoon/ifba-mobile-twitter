import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import React, { useEffect, useState } from 'react';
import commonStyles, { colors } from '../styles';
import PapacapimAPI from '../services/PapacapimAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OtherUserProfileScreen({ navigation, route }) {
  const { username } = route.params;

  const [name, setName] = useState('');
  const [following, setFollowing] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [followersQuantity, setFollowersQuantity] = useState(0);

  useEffect(() => {
    async function setFollowSettings() {
      const isFollowing = await PapacapimAPI.isFollowingUser(username);
      const userFollowers = await PapacapimAPI.getUserFollowers(username);
      const user = await PapacapimAPI.findUserByLogin(username);

      setName(user.name);
      setFollowing(isFollowing);
      setFollowers(userFollowers);
      setFollowersQuantity(userFollowers.length);
    }
    setFollowSettings();
  }, [username]);

  async function followUser() {
    const status = await PapacapimAPI.followUser(username);
    if (status === 201) {
      const userFollowers = await PapacapimAPI.getUserFollowers(username);
      setFollowers(userFollowers);

      setFollowersQuantity(followersQuantity + 1);
      return setFollowing(!following);
    }

    Alert.alert('Não foi possível começar a seguir este usuário.');
  }

  async function unfollowUser() {
    const status = await PapacapimAPI.unfollowUser(username);
    if (status === 204) {
      const userFollowers = await PapacapimAPI.getUserFollowers(username);
      setFollowers(userFollowers);

      setFollowersQuantity(followersQuantity - 1);
      return setFollowing(!following);
    }

    Alert.alert('Não foi possível deixar de seguir este usuário.');
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageCenter}>
        <Image
          style={commonStyles.userImage}
          source={require('../assets/user.png')}
        />
      </View>
      <Text style={[styles.tinyText, { textAlign: 'center' }]}>
        {username}
        <Text style={styles.text}> | {name}</Text>
      </Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Followers', { followers })}
        >
          <Text style={styles.followers}>
            {followersQuantity}{' '}
            {followersQuantity === 1 ? 'Seguidor' : 'Seguidores'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        {following ? (
          <TouchableOpacity
            style={commonStyles.buttonBlack}
            onPress={unfollowUser}
          >
            <Text style={commonStyles.buttonBlackText}>Deixar de seguir</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={commonStyles.buttonBlack}
            onPress={followUser}
          >
            <Text style={commonStyles.buttonBlackText}>Seguir</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBg,
    flex: 1,
    justifyContent: 'center',
    padding: 24
  },
  tinyText: {
    fontSize: 18,
    color: '#efefee'
  },
  text: {
    fontSize: 24,
    color: '#efefee'
  },
  followers: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 18,
    color: '#fff',
    textDecorationLine: 'underline'
  },
  imageCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
