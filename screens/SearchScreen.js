import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
export default function SearchScreen({ navigation }) {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>O que você desejar buscar?</Text>

      <View style={{ flexDirection: 'row' }}>
        <Pressable
          style={[styles.button, { marginRight: 5 }]}
          onPress={() => navigation.navigate('SearchUser')}
        >
          <Text style={styles.textButton}>Usuário</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('SearchPost')}
        >
          <Text style={styles.textButton}>Post</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '800'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1C9BF0',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 100
  },
  textButton: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16
  }
});
