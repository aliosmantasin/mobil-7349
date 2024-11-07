import {Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import { COLORS } from '../constant';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';


const HomeScreen = () => {

  const navigation = useNavigation()

  return (
      <View style={{
        height: '100%',
        alignItems:"center",
        justifyContent: 'center',
      }}>
        <Text style={{marginBottom:5}}>Home Page</Text>
      <TouchableOpacity style={{
      backgroundColor: COLORS.primary,
      paddingVertical:10,
      paddingHorizontal:10,
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection:"row",
      width: 200,
      borderRadius:10,
      }}>
      <AntDesign name="arrowleft" size={24} color="white" />
      <Text onPress={() => {
        navigation.navigate("login" as never)
      }} style={{
            fontSize:16,
            color: "white",
          }}> Turn LoginPage</Text>

      </TouchableOpacity>
      </View>
   
 
  )
}

export default HomeScreen