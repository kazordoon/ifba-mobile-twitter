import { StyleSheet } from 'react-native'

const colors = {
  primaryBg: '#1DA1F2'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBg,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: { fontSize: 32, color: '#FFF', fontWeight: 'bold' },
  colorWhite: { color: '#FFF' }
})

export default styles
