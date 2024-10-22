import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
import Post from '../components/Post';
import PapacapimAPI from '../services/PapacapimAPI';
import setPostsLikesAndReplies from '../utils/setPostsLikesAndReplies';

export default function SearchPostScreen({ navigation }) {
  const [searchParam, setSearchParam] = useState('');
  const [posts, setPosts] = useState([]);

  async function handlePostsFinding() {
    const foundPosts = await PapacapimAPI.findPosts(searchParam);
    await setPostsLikesAndReplies(foundPosts);

    setPosts(foundPosts);
  }

  return (
    <ScrollView style={styles.page}>
      <TextInput
        placeholder="Buscar postagem..."
        style={styles.search}
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={searchParam}
        onChangeText={setSearchParam}
      ></TextInput>
      <Button title="Buscar" onPress={handlePostsFinding}>
        Buscar
      </Button>
      {posts.map((post) => (
        <Post key={post.id} navigation={navigation} post={post} />
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
