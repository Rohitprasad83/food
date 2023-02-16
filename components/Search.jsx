import React, { useState, useEffect } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
function Search({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.SearchBackground}>
      <Feather name="search" size={30} style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        onChangeText={newTerm => onTermChange(newTerm)}
        value={term}
        style={styles.SearchStyle}
        onEndEditing={onTermSubmit}
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
