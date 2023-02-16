import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

const Item = ({ title, photo }) => (
  <View style={styles.ListStyle}>
    <Text>{title}</Text>
    <Image source={{ uri: photo }} />
  </View>
)
function Posts({ posts }) {
  console.log(posts)
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Item title={item.title} photo={item.url} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  ListStyle: {
    // height: 100,
    // width: 100,
    fontSize: 24,
    color: 'black',
    borderWidth: 2,
    backgroundColor: 'yellow',
    marginVertical: 4,
    flex: 1,
  },
})

export default Posts
