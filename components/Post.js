import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import IconButton from './IconButton';

export default function Post({ post, navigation }) {
  return (
    <View>
      <Pressable style={styles.container}>
        <Pressable onPress={() => navigation.navigate('OtherUserProfile', post.user)}>
          <Image source={post.user.image} style={styles.userImage} />
        </Pressable>

        <View style={styles.mainContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.name}>{post.user.name}</Text>
            <Text style={styles.username}>{post.user.username} · 1h</Text>
          </View>

          <Text style={styles.content}>{post.content}</Text>

          {post.image && <Image source={post.image} style={styles.image} />}

          <View style={styles.footer}>
            <IconButton icon="comment" text={post.numberOfComments} />
            <IconButton icon="retweet" text={post.numberOfRetweets} />
            <IconButton icon="heart" text={post.numberOfLikes} />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: '600',
  },
  username: {
    color: 'gray',
    marginLeft: 5,
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginVertical: 10,
    borderRadius: 15,
  },
  footer: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
});
