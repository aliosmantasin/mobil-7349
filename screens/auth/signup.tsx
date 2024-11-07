import {  StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS} from '../../constant'
import ScreenWrapper from '../../components/screenWrapper';
import HeroImage from '../../components/heroImage';
import PageTitle from '../../components/pageTitle';
import IconsLoginRegister from '../../components/iconsLoginRegister';
import LoginOrRegister from '../../components/loginOrRegister';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';




const SignupScreen = () => {

    const navigation = useNavigation()


  return (
    <ScreenWrapper>
    <TouchableOpacity onPress={() => {
        navigation.canGoBack() && navigation.goBack()
    }}>

    <AntDesign name="arrowleft" size={24} color="black" />
   </TouchableOpacity>

    <HeroImage imgSrc={require("../../assets/images/SignupImage.png")}/>
   
    <View style={{
        paddingVertical: 25,
    }}>
    <PageTitle PageTitle="Sign up"/> 
    </View>

    <IconsLoginRegister 
        imgSrcGoogle={require("../../assets/images/google.png")}
        imgSrcFacebook={require("../../assets/images/facebook.png")}
        imgSrcApple={require("../../assets/images/apple-logo.png")}
        />
    <View style={{marginTop:20}}>
    <LoginOrRegister label="Or, register with email..."/>
    </View>
<View>
    <View style={styles.input_inclusive}>
          <MaterialIcons style={styles.icon} name="alternate-email" />
         <TextInput style={styles.input} placeholder='Email ID'  placeholderTextColor="rgb(154, 161, 176)"/>
    </View>

    <View style={styles.input_inclusive}>
         <Ionicons style={styles.icon} name="lock-closed-outline"/>
         <TextInput style={styles.input} placeholder='Password'  placeholderTextColor="rgb(154, 161, 176)"/>
    </View>
    <View style={styles.input_inclusive}>
        <FontAwesome style={styles.icon} name="user-o" />
         <TextInput style={styles.input} placeholder='Full Name'  placeholderTextColor="rgb(154, 161, 176)"/>
    </View>
    <View style={styles.input_inclusive}>
       <FontAwesome5 style={styles.icon} name="building" />
         <TextInput style={styles.input} placeholder='Company Name'  placeholderTextColor="rgb(154, 161, 176)"/>
    </View>

    <View style={styles.input_inclusive}>
       <FontAwesome5 style={styles.icon} name="building" />
         <TextInput style={styles.input} placeholder='Company Name'  placeholderTextColor="rgb(154, 161, 176)"/>
    </View>

    <View style={styles.input_inclusive}>
       <FontAwesome5 style={styles.icon} name="building" />
         <TextInput style={styles.input} placeholder='Company Name'  placeholderTextColor="rgb(154, 161, 176)"/>
    </View>
  
    </View>

    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  
    input: {
        paddingHorizontal: 12,
        paddingVertical: 18,
        flex: 1,
        fontSize: 14,
    },
    input_inclusive: {
       flexDirection:"row",
       alignItems:"center",
       marginVertical: 2,
       borderBottomWidth: 0.4,
       borderBottomColor: "#ababab",
    },
    icon: {
       color : "rgb(127, 134, 160)",
       fontSize: 20
    },
    ForgotText: {
        color: COLORS.primary,
        fontSize:16
    },

    InclusiveLoginRegisterIcons: {
        flexDirection:'row',
        justifyContent:"space-between",
        marginTop: 20
    },

  
 
  
})



export default SignupScreen