import React from 'react'
import { View, Text, Button } from 'react-native'

function OtherScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>other Screen</Text>
      <Button
        title="Go to home screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default OtherScreen
