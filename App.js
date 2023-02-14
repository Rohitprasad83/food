import React from 'react'
import { View, Text, Button } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import OtherScreen from './otherScreen'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Home Screen </Text>
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

export default createAppContainer(AppNavigator)
