import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import commonStyles, { colors } from '../styles'

export default function OtherUserProfileScreen({ route }) {
  const { username, name, image } = route.params
  console.log(route.params)

  return (
    <View style={styles.container}>
      <View style={styles.imageCenter}>
        <Image style={styles.userImage} source={image} />
      </View>
      <Text style={[styles.tinyText, { textAlign: 'center' }]}>
        {username}
        <Text style={styles.text}> | {name}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tinyText: {
    fontSize: 18,
    color: '#efefee'
  },
  text: {
    fontSize: 24,
    color: '#efefee'
  },
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
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 50
  }
})
