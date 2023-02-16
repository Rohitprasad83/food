import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

const Item = ({ title, photo }) => {
  return (
    <View style={styles.ListStyle}>
      <Text>{title}</Text>
      <Image source={{ uri: photo }} style={styles.ItemImage} />
    </View>
  )
}

function Posts({ posts }) {
  return (
    <View>
      <FlatList
        horizontal
        data={posts}
        renderItem={({ item }) => (
          <Item title={item.title} photo={item.image} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  ListStyle: {
    fontSize: 24,
    color: 'black',
    borderWidth: 2,
    backgroundColor: 'yellow',
    marginVertical: 4,
    width: 250,
    flexShrink: 1,
  },
  ItemImage: {
    width: 250,
    height: 120,
  },
})

export default Posts
