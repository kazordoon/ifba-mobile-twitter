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
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('UpdateUserData')}>
          <Image style={styles.userImage} source={require('../assets/user.png')} />
        </Pressable>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreatePost')} title="+">
          <Text style={[{ textAlign: 'center', fontSize: 34, color: '#fff' }, styles.button]}>+</Text>
        </TouchableOpacity>
      </View>
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
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: colors.primaryBg,
    borderRadius: 50,
  }
});