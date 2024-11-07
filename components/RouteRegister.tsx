import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constant'
import { useNavigation } from '@react-navigation/native'

const RouteRegister = ({preText, postText, route}:{preText:string, postText:string,route:string }) => {

    const navigation = useNavigation()

  return (

    <Text style={styles.iThickLogisticsText}>{preText} <Text 
    onPress={() => {
        navigation.navigate(route as never)
    }} 
    
    style={styles.RegisterText}>{postText}</Text></Text>

  )
}

const styles = StyleSheet.create({
    iThickLogisticsText: {
        textAlign: 'center',
        color: "#797979",
    },

    RegisterText: {
        color: COLORS.primary,
        fontWeight: "bold"
        
    }
})

export default RouteRegister