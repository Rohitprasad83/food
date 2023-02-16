import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

function Post({ navigation }) {
  const { item } = navigation.state.params
  //   console.log(item)
  return (
    <View>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginVertical: 24 }}>
        {item.title}{' '}
      </Text>
      <Image source={{ uri: item.image }} style={styles.ImageStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  ImageStyle: {
    height: 300,
    width: '100%',
  },
})
export default Post
