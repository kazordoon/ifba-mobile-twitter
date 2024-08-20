import { StyleSheet } from 'react-native'

export const colors = {
  primaryBg: '#1DA1F2'
}

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBg,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 15
  },
  colorWhite: { color: '#FFF' },
  bgBlack: { backgroundColor: '#1c1c1c' },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 200
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16
  },
  registrationText: {
    color: '#000',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16
  },

  buttonBlack: {
    backgroundColor: '#000',
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: '100%',
    alignItems: 'center'
  },
  buttonBlackText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  buttonWhite: {
    backgroundColor: '#fff',
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#000',
    width: '100%',
    alignItems: 'center'
  },
  buttonWhiteText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 50
  },
  textInput: {
    color: '#000',
    borderColor: '#000',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    fontSize: 20,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#fff'
  }
})

export default commonStyles
