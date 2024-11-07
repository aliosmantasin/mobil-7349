import { View, useWindowDimensions, Image } from 'react-native'
import React from 'react'



const HeroImage = ({imgSrc}: {imgSrc: object}) => {

    const  { height: screenHeight } = useWindowDimensions()

  return (

          <View style={{
            height: (screenHeight * 3) / 10,
            paddingHorizontal: 10,
            paddingVertical:10,
           
        }}>

            <Image
             style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              
            }}
             source={imgSrc} />

        </View>

  
  )
}

export default HeroImage