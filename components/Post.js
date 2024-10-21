import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import IconButton from './IconButton';
import formatDate from '../utils/formatDate';

export default function Post({ post, navigation }) {
  return (
    <View>
      <Pressable style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate('OtherUserProfile', { username: post.user_login })}
        >
          <Image source={require('../assets/user.png')} style={styles.userImage} />
        </Pressable>

        <View style={styles.mainContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.name}>@{post.user_login}</Text>
            <Text style={styles.username}>· {formatDate(post.created_at)}</Text>
          </View>
          <Text style={styles.content}>{post.message}</Text>
          <View style={styles.footer}>
            <IconButton icon="comment" text={"5"} />
            <IconButton icon="heart" text={"12"} />
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    backgroundColor: 'white'
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1
  },
  name: {
    fontWeight: '600'
  },
  username: {
    color: 'gray',
    marginLeft: 5
  },
  message: {
    lineHeight: 20,
    marginTop: 5
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginVertical: 10,
    borderRadius: 15
  },
  footer: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'flex-start'
  }
});
