import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
import { useEffect, useState } from 'react';
import PapacapimAPI from '../services/PapacapimAPI';
import Post from '../components/Post';
import formatDate from '../utils/formatDate';

export default function ShowPostScreen({ route, navigation }) {
  const { post } = route.params;
  const [replies, setReplies] = useState(post.replies);

  const [message, setMessage] = useState('');

  async function handleReplySending() {
    const { statusCode, replySent } = await PapacapimAPI.replyToPost(
      post.id,
      message
    );
    if (statusCode === 201) {
      post.replies.unshift(replySent);
      return setReplies([...post.replies]);
    }

    return Alert.alert('Não foi possível responder esta postagem.');
  }

  return (
    <ScrollView style={styles.page}>
      <Post navigation={navigation} post={post}></Post>

      <View>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Responder postagem..."
          multiline
          numberOfLines={3}
          style={styles.replyInput}
        />
        <Pressable style={styles.button} onPress={handleReplySending}>
          <Text style={styles.buttonText}>Postar</Text>
        </Pressable>
      </View>

      {replies.map((reply) => (
        <View key={reply.id} style={styles.replyContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.name}>@{reply.user_login}</Text>
            <Text style={styles.username}>
              · {formatDate(reply.created_at)}
            </Text>
          </View>
          <Text style={styles.content}>{reply.message}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: '#1C9BF0',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 90,
    marginLeft: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16
  },
  replyContainer: {
    margin: 10
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
  replyInput: {
    flex: 1,
    borderColor: 'rgba(82,82,82,.5)',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 5,
    fontSize: 14,
    margin: 10
  }
});
