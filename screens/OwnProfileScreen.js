import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Button
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../styles';
import PapacapimAPI from '../services/PapacapimAPI';
import Post from '../components/Post';

export default function OwnProfileScreen({ navigation }) {
  const [pageNumber, setPageNumber] = useState(0);
  const [user, setUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [followersQuantity, setFollowersQuantity] = useState(0);

  async function loadProfileData() {
    const username = await AsyncStorage.getItem('username');
    setUser(await PapacapimAPI.findUserByLogin(username));

    const userFollowers = await PapacapimAPI.getUserFollowers(username);
    setFollowers(userFollowers);
    setFollowersQuantity(userFollowers.length);
  }

  async function loadProfilePosts() {
    const username = await AsyncStorage.getItem('username');
    const posts = await PapacapimAPI.getPostsFromUser(username, pageNumber);

    setPageNumber(pageNumber + 1);
    setUserPosts([...userPosts, ...posts]);
  }

  async function handleProfileLoading() {
    await loadProfileData();
    await loadProfilePosts();
  }

  useEffect(() => {
    handleProfileLoading();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Image
          style={styles.userImage}
          source={require('../assets/user.png')}
        />
      </View>
      <Text style={[styles.tinyText, { textAlign: 'center' }]}>
        {user.login}
        <Text style={styles.text}> | {user.name}</Text>
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
      <View style={styles.center}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('UpdateUserData')}
        >
          <Text style={styles.textWhite}>Editar perfil</Text>
        </Pressable>
      </View>

      <ScrollView style={styles.postsContainer}>
        {userPosts.map((post) => (
          <Post
            key={post.id}
            navigation={navigation}
            post={post}
            isOwnPost={true}
            actionAfterDelete={async () => {
              const username = await AsyncStorage.getItem('username');
              const posts = await PapacapimAPI.getPostsFromUser(username);
              setUserPosts(posts);
            }}
          />
        ))}
      </ScrollView>

      <Button onPress={loadProfilePosts} title="Carregar mais posts">
        Carregar mais posts
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBg,
    flex: 1
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  button: {
    backgroundColor: '#111',
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 50,
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textWhite: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 20
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
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  postsContainer: {
    marginTop: 20
  }
});
