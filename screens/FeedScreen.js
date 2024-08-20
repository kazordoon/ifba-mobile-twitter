import {
  Button,
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import Post from '../components/Post';
import { colors } from '../styles';

export default function FeedScreen({ navigation }) {
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
        <Button style={styles.button} onPress={() => navigation.navigate('CreatePost')} title="Criar postagem">Criar postagem</Button>
      <Post navigation={navigation} post={staticData}></Post>
      <Post navigation={navigation} post={staticData}></Post>
      <Post navigation={navigation} post={staticData}></Post>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "rgba(82,82,82,.3)",
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingRight: 14,
    paddingLeft: 5,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: colors.primaryBg,
    borderRadius: 50,
  }
});