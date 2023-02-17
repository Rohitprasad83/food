import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

function Post({ navigation }) {
  const { item } = navigation.state.params
  return (
    <View>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginVertical: 24 }}>
        {item.title}{' '}
      </Text>
      <Image source={{ uri: item.image }} style={styles.ImageStyle} />
      <Text style={{ fontSize: 12, marginVertical: 24 }}>
        {item.description}
      </Text>
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
