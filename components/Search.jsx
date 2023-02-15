import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'

function Search() {
  const [text, onChangeText] = useState('')
  return (
    <View>
      <TextInput
        placeholder="Enter your Text"
        onChangeText={onChangeText}
        value={text}
        style={styles.SearchStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  SearchStyle: {
    marginVertical: 4,
    padding: 4,
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderColor: '#000000',
    width: '100%',
  },
})

export default Search
