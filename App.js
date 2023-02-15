import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Search from './components/Search'
import OtherScreen from './otherScreen'
function HomeScreen({ navigation }) {
  const [text, onChangeText] = useState('')
  return (
    <View style={styles.HomeScreen}>
      <Search />
      <Button
        title="Go to other screen"
        onPress={() => navigation.navigate('Other')}
      />
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
})

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    backgroundColor: 'white',
  },
})

export default createAppContainer(AppNavigator)
