import { StyleSheet } from 'react-native'

export const colors = {
  primaryBg: '#1DA1F2'
}

const styles = StyleSheet.create({
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
  },
  colorWhite: { color: '#FFF' },
  bgBlack: { backgroundColor: '#1c1c1c' },
  loginScreenButton: {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1C1C1C',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 200,
  },
  loginText: {
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  },
  registrationText: {
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    textDecorationLine: 'underline'
  }
})

export default styles
