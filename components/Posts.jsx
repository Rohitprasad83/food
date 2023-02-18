import React, { useState, useEffect, useMemo } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import Post from './Post'
const Item = ({ item, navigation }) => {
  function goToSinglePost(navigation) {
    navigation.navigate('PostScreen', {
      item,
    })
  }
  return (
    <View style={styles.ItemStyle}>
      <TouchableOpacity onPress={() => goToSinglePost(navigation)}>
        <Text>{item.title}</Text>
        <Image source={{ uri: item.image }} style={styles.ItemImage} />
      </TouchableOpacity>
    </View>
  )
}

function Posts({ posts, navigation }) {
  const mens = useMemo(
    () => posts.filter(post => post.category === "men's clothing"),
    posts
  )
  const womens = useMemo(
    () => posts.filter(post => post.category === "women's clothing"),
    posts
  )
  const electronics = useMemo(
    () => posts.filter(post => post.category === 'electronics'),
    posts
  )
  const jewelery = useMemo(
    () => posts.filter(post => post.category === 'jewelery'),
    posts
  )
  return (
    <ScrollView>
      <View>
        <Text style={styles.CategoryStyle}>Men's Clothing</Text>
        <FlatList
          horizontal
          data={mens}
          renderItem={({ item }) => (
            <Item item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View>
        <Text style={styles.CategoryStyle}>Women's Clothing</Text>
        <FlatList
          horizontal
          data={womens}
          renderItem={({ item }) => (
            <Item item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View>
        <Text style={styles.CategoryStyle}>Electronics Clothing</Text>
        <FlatList
          horizontal
          data={electronics}
          renderItem={({ item }) => (
            <Item item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
      </View>

      <View>
        <Text style={styles.CategoryStyle}>Jewellery Clothing</Text>
        <FlatList
          horizontal
          data={jewelery}
          renderItem={({ item }) => (
            <Item item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ItemStyle: {
    fontSize: 24,
    color: 'black',
    borderRadius: 4,
    backgroundColor: '#F0EEEE',
    marginVertical: 4,
    marginHorizontal: 4,
    width: 250,
    flexShrink: 1,
    padding: 8,
  },
  ItemImage: {
    width: 250,
    height: 120,
    alignSelf: 'center',
  },
  CategoryStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationStyle: 'underline',
    marginVertical: 8,
  },
})

export default Posts
