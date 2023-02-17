import React, { useState, useEffect } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Search from './components/Search'
import OtherScreen from './otherScreen'
import Posts from './components/Posts'
import Post from './components/Post'
function HomeScreen({ navigation }) {
  const [text, onChangeText] = useState('')
  const [posts, setPosts] = useState([])
  // 'men's clothing, jewelery,electronics, women's clothing'
  // const [mens, set]
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err))
  }, [])
  return (
    <View style={styles.HomeScreen}>
      <Search
        term={text}
        onTermChange={newText => onChangeText(newText)}
        onTermSubmit={() => console.log('submitted')}
      />
      <Text>{text}</Text>
      <Posts posts={posts} navigation={navigation} />
    </View>
  )
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Other: {
    screen: OtherScreen,
  },
  PostScreen: {
    screen: Post,
  },
})

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    backgroundColor: 'white',
  },
})

export default createAppContainer(AppNavigator)
