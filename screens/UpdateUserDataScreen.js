import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  Alert,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import commonStyles, { colors } from '../styles';

export default function UpdateUserDataScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [image, setImage] = useState('https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png');

  const [modalVisible, setModalVisible] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageCenter}>
        <TouchableOpacity style={commonStyles.buttonBlack} onPress={pickImage}>
          <Text style={commonStyles.colorWhite}>Alterar imagem de perfil</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.userImage} />}
      </View>
      <TextInput
        placeholder="@johndoe"
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="johndoe@mail.net"
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              secureTextEntry={true}
              placeholder="Antiga senha"
              placeholderTextColor="rgba(52, 52, 52, 0.8)"
              value={oldPassword}
              onChangeText={setOldPassword}
              style={[styles.input, { fontSize: 16 }]}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Nova senha"
              placeholderTextColor="rgba(52, 52, 52, 0.8)"
              value={newPassword}
              onChangeText={setNewPassword}
              style={[styles.input, { fontSize: 16 }]}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                Alert.alert('Senha alterada com sucesso.');
              }}>
              <Text style={styles.textStyle}>Salvar nova senha</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.updatePasswordButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.updatePasswordButtonText}>
          Alterar senha
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Feed');
          Alert.alert('Dados alterados com sucesso.');
        }}
      >
        <Text style={styles.buttonText}>
          Salvar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '70%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  container: {
    backgroundColor: colors.primaryBg,
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  imageCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  label: {
    color: '#fff',
    fontSize: 24,
    marginVertical: 5,
  },
  input: {
    color: '#000',
    borderColor: '#000',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    fontSize: 20,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#050A12',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 5,
  },
  updatePasswordButton: {
    backgroundColor: '#fff',
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 5,
    paddingLeft: 10,
  },
  updatePasswordButtonText: {
    color: '#050A12',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});