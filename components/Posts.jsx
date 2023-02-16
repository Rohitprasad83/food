import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native'
import Post from './Post'
const Item = ({ item, navigation }) => {
  function goToSinglePost(navigation) {
    navigation.navigate('PostScreen', {
      item,
    })
  }
  return (
    <View style={styles.ListStyle}>
      <TouchableOpacity onPress={() => goToSinglePost(navigation)}>
        <Text>{item.title}</Text>
        <Image source={{ uri: item.image }} style={styles.ItemImage} />
      </TouchableOpacity>
    </View>
  )
}

function Posts({ posts, navigation }) {
  return (
    <View>
      <FlatList
        horizontal
        data={posts}
        renderItem={({ item }) => <Item item={item} navigation={navigation} />}
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
