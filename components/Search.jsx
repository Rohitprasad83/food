import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
function Search() {
  const [text, onChangeText] = useState('')
  return (
    <View style={styles.SearchBackground}>
      <Feather name="search" size={30} />
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
  SearchBackground: {
    // flex: 1,
    // justifyContent: 'space-between',
    width: '100%',
    marginHorizontal: 15,
    marginVertical: 4,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    padding: 16,
  },
  SearchStyle: {
    marginVertical: 4,
    padding: 4,
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderColor: '#000000',
    width: '100%',
  },
  SearchLogo: {
    width: 48,
    height: 48,
  },
})

export default Search
