import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
function Search() {
  const [text, onChangeText] = useState('')
  return (
    <View style={styles.SearchBackground}>
      <Feather name="search" size={30} style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        onChangeText={onChangeText}
        value={text}
        style={styles.SearchStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  SearchBackground: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  SearchStyle: {
    borderColor: 'black',
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
  },
})

export default Search
