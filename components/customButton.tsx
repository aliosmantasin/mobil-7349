import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constant'
import { useNavigation } from '@react-navigation/native'



const CustomButton = ({buttonTitle}:{buttonTitle: string}) => {

    const navigation = useNavigation()

  return (

        <TouchableOpacity onPress={() => {
            navigation.navigate("home-page" as never)
       }} style={styles.primaryButton}>
            <Text  style={styles.LoginText}>{buttonTitle}</Text>
        </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 12,
        paddingVertical: 18,
        borderRadius: 16,
    },

    LoginText : {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
    }
})

export default CustomButton