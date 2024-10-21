import { Button, ScrollView, StyleSheet } from 'react-native';
import PapacapimAPI from '../services/PapacapimAPI';
import Post from '../components/Post';
import { colors } from '../styles';
import { useEffect, useState } from 'react';

export default function FeedScreen({ navigation }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [posts, setPosts] = useState([]);

  async function handlePostsLoading() {
    const newPosts = await PapacapimAPI.getPosts(pageNumber);
    setPageNumber(pageNumber + 1);
    setPosts([...posts, ...newPosts]);
  }

  useEffect(() => {
    handlePostsLoading();
  }, []);

  return (
    <ScrollView style={styles.page}>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('CreatePost')}
        title="Criar postagem"
      >
        Criar postagem
      </Button>
      {posts.map((post) => (
        <Post key={post.id} navigation={navigation} post={post}></Post>
      ))}
      <Button onPress={handlePostsLoading} title="Carregar mais posts">
        Carregar mais posts
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: colors.primaryBg,
    borderRadius: 50
  }
});
