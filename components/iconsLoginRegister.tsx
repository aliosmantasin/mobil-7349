import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constant'

const IconsLoginRegister = ({imgSrcGoogle, imgSrcFacebook, imgSrcApple}:{imgSrcGoogle: object, imgSrcFacebook: object, imgSrcApple: object}) => {
  return (
    <View style={styles.InclusiveLoginRegisterIcons}>

    <View style={styles.iconInclusive}>
            <Image style={styles.imageOptions}
             source={imgSrcGoogle} />
        </View>

       <View style={styles.iconInclusive}>
            <Image style={styles.imageOptions}
             source={imgSrcFacebook} />
        </View>

        <View style={styles.iconInclusive}>
            <Image style={styles.imageOptions}
             source={imgSrcApple} />
        </View>

        </View>
  )
}



const styles = StyleSheet.create({
  
    InclusiveLoginRegisterIcons: {
        flexDirection:'row',
        justifyContent:"space-between",
        marginTop: 10,
    },
    iconInclusive: {
        width: 95,
        borderWidth: 0.4,
        borderColor: "#ababab",
        borderRadius: 14,
        paddingHorizontal: 14,
        paddingVertical:14,
       
    },
    imageOptions: {
        height: 27,
        width: 27,
        objectFit: "contain",
        margin:"auto"
    }
  
})





export default IconsLoginRegister