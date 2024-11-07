import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LoginOrRegister = ({label}:{label:string}) => {
  return (
    <Text style={styles.LoginOrWhithText}>{label}</Text>
  )
}

const styles = StyleSheet.create({
    LoginOrWhithText: {
        color : "#656565",
        fontSize:12,
        paddingVertical:15,
        textAlign:"center",
    }
})

export default LoginOrRegister