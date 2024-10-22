import { View, Text, Image, StyleSheet, Pressable, Alert } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import formatDate from '../utils/formatDate';
import PapacapimAPI from '../services/PapacapimAPI';

export default function Post({
  actionAfterDelete,
  isOwnPost,
  post,
  navigation
}) {
  const [hasLiked, setHasLiked] = useState(false);
  const [postData, setPostData] = useState({});

  useEffect(() => {
    async function getIfUserHasLikedThePost() {
      const ownUsername = await AsyncStorage.getItem('username');
      const { likes } = await PapacapimAPI.getPostByID(post.id);
      setHasLiked(likes.some((user) => user.user_login === ownUsername));
    }

    async function loadLikesAndReplies() {
      const likes = await PapacapimAPI.getPostLikes(post.id);
      const replies = await PapacapimAPI.getPostReplies(post.id);

      post.likes = likes;
      post.replies = replies;

      post.likeNumbers = likes.length;
      post.replyNumbers = replies.length;

      setPostData(post);
    }

    loadLikesAndReplies();
    getIfUserHasLikedThePost();
  }, [postData]);

  async function handlePostLike() {
    if (!hasLiked) {
      post.likeNumbers = postData.likeNumbers + 1;
      await PapacapimAPI.likePost(post.id);
    } else {
      post.likeNumbers = postData.likeNumbers - 1;
      await PapacapimAPI.dislikePost(post.id);
    }

    setHasLiked(!hasLiked);
    setPostData(post);
  }

  async function handlePostDeletion() {
    console.log(post.id);
    const statusCode = await PapacapimAPI.deletePost(post.id);
    if (statusCode === 204) {
      if (actionAfterDelete) await actionAfterDelete();
      return Alert.alert('Postagem deletada com sucesso.');
    }

    return Alert.alert('Ocorreu um erro ao tentar deletar a postagem.');
  }

  return (
    <View>
      <Pressable style={styles.container}>
        <Pressable
          onPress={() =>
            navigation.navigate('OtherUserProfile', {
              username: post.user_login
            })
          }
        >
          <Image
            source={require('../assets/user.png')}
            style={styles.userImage}
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ShowPost', { post })}>
          <View style={styles.mainContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.name}>@{post.user_login}</Text>
              <Text style={styles.username}>
                · {formatDate(post.created_at)}
              </Text>
              {isOwnPost && (
                <Pressable onPress={handlePostDeletion}>
                  <AntDesign
                    style={{ marginLeft: 40 }}
                    name="delete"
                    size={22}
                    color="red"
                  />
                </Pressable>
              )}
            </View>
            <Text style={styles.content}>{post.message}</Text>
            <View style={styles.footer}>
              <View style={styles.icon}>
                <FontAwesome6 name={'comment'} size={22} color="gray" />
                <Text style={{ fontSize: 12, color: 'gray' }}>
                  {' '}
                  {postData.replyNumbers}{' '}
                </Text>
              </View>
              <View style={styles.icon}>
                <FontAwesome
                  name={hasLiked ? 'heart' : 'heart-o'}
                  size={22}
                  color={hasLiked ? 'red' : 'gray'}
                  onPress={handlePostLike}
                />
                <Text style={{ fontSize: 12, color: 'gray' }}>
                  {' '}
                  {postData.likeNumbers}{' '}
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
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
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  footer: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'flex-start'
  }
});
