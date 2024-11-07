import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constant'

const PageTitle = ({PageTitle}: {PageTitle: string} ) => {
  return (
    <Text style={styles.title}>{PageTitle}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 32,
    color: COLORS.secondary
  }
})
export default PageTitle