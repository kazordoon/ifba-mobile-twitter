import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  Alert
} from 'react-native';
import React, { useEffect, useState } from 'react';
import PapacapimAPI from '../services/PapacapimAPI';
import commonStyles, { colors } from '../styles';

export default function UpdateUserDataScreen({ navigation }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const [namePlaceholder, setNamePlaceholder] = useState('');
  const [usernamePlaceholder, setUsernamePlaceholder] = useState('');

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const IMAGE_URL =
    'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png';

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const user = await PapacapimAPI.findUserByLogin('abc');
      setUsernamePlaceholder(user.login);
      setNamePlaceholder(user.name);
    }
    fetch();
  })

  async function handleUserUpdate() {
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageCenter}>
        <Image
          source={{ uri: IMAGE_URL }}
          style={{ ...commonStyles.userImage, marginBottom: 15 }}
        />
      </View>
      <TextInput
        placeholder={namePlaceholder}
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={name}
        onChangeText={setName}
        style={commonStyles.textInput}
      />
      <TextInput
        placeholder={usernamePlaceholder}
        placeholderTextColor="rgba(52, 52, 52, 0.8)"
        value={username}
        onChangeText={setUsername}
        style={commonStyles.textInput}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              secureTextEntry={true}
              placeholder="Antiga senha"
              placeholderTextColor="rgba(52, 52, 52, 0.8)"
              value={oldPassword}
              onChangeText={setOldPassword}
              style={[commonStyles.textInput, { fontSize: 16 }]}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Nova senha"
              placeholderTextColor="rgba(52, 52, 52, 0.8)"
              value={newPassword}
              onChangeText={setNewPassword}
              style={[commonStyles.textInput, { fontSize: 16 }]}
            />
            <Pressable
              style={[commonStyles.buttonBlack]}
              onPress={() => {
                setModalVisible(!modalVisible);
                Alert.alert('Senha alterada com sucesso.');
              }}
            >
              <Text style={styles.textStyle}>Salvar nova senha</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={commonStyles.buttonWhite}
        onPress={() => setModalVisible(true)}
      >
        <Text style={commonStyles.buttonWhiteText}>Alterar senha</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[commonStyles.buttonBlack, { width: '100%' }]}
        onPress={handleUserUpdate}
      >
        <Text style={commonStyles.buttonBlackText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBg,
    flex: 1,
    justifyContent: 'center',
    padding: 24
  },
  imageCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '70%'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
});
