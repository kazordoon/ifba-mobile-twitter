import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
  SafeAreaView
} from 'react-native';

export default function CreatePostScreen({ navigation }) {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/user.png')}
            style={styles.userIcon}
          />
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="O que está acontecendo?"
            multiline
            numberOfLines={5}
            style={styles.postText}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Feed')}>
            <Text style={styles.buttonText}>Postar</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1C9BF0',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  userIcon: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
  postText: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 5,
  },
});
