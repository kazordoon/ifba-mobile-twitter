import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Post from '../components/Post';

export default function FeedScreen() {
  const staticData = {
    user: {
      name: 'John Doe',
      username: '@johndoe',
      image: require('../assets/user.png'),
    },
    content: 'Hello World',
    image: require('../assets/example.jpg'),
    numberOfComments: 5,
    numberOfRetweets: 2,
    numberOfLikes: 12,
  };

  return (
    <ScrollView style={styles.page}>
      <Post post={staticData}></Post>
      <Post post={staticData}></Post>
      <Post post={staticData}></Post>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});