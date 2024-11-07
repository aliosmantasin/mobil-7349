import { View, Text, StyleSheet, TextInput, } from 'react-native'
import React from 'react'
import { COLORS} from '../../constant'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import HeroImage from '../../components/heroImage';
import PageTitle from '../../components/pageTitle';
import CustomButton from '../../components/customButton';
import LoginOrRegister from '../../components/loginOrRegister';
import IconsLoginRegister from '../../components/iconsLoginRegister';
import RouteRegister from '../../components/RouteRegister';
import ScreenWrapper from '../../components/screenWrapper';


const LoginScreen = () => {

  return (
    
    <ScreenWrapper>
    
    <HeroImage imgSrc={require("../../assets/images/LoginImage.png")}/>
    <View style={{
        flexDirection: "column"
    }}>

    <View style={{
        paddingVertical: 25,
    }}>
    <PageTitle PageTitle="Login"/> 
    </View>

    <View style={styles.input_inclusive}>
          <MaterialIcons style={styles.icon} name="alternate-email" />
         <TextInput style={styles.input} placeholder='Email ID'  placeholderTextColor="rgb(154, 161, 176)"/>
    </View>

      <View style={styles.input_inclusive}>
        <Ionicons style={styles.icon} name="lock-closed-outline"/>  
        <TextInput style={styles.input} placeholder='Password' placeholderTextColor="rgb(154, 161, 176)"/>
        <Text style={styles.ForgotText}>Forgot?</Text>
      </View>

      <View style={{
        paddingVertical: 20,
        }}>
        <CustomButton buttonTitle="Login"/>
        </View>

        <LoginOrRegister label="Or, login with..."/>

        <IconsLoginRegister 
        imgSrcGoogle={require("../../assets/images/google.png")}
        imgSrcFacebook={require("../../assets/images/facebook.png")}
        imgSrcApple={require("../../assets/images/apple-logo.png")}
        />


    <View style={{
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
    }}>
        
        <RouteRegister preText='New To iThickLogistics?' postText='Register' route='signup'/>
    
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
        fontSize: 16,
    },
    input_inclusive: {
       flexDirection:"row",
       alignItems:"center",
       marginVertical: 2,
       borderBottomWidth: 0.4,
       borderBottomColor: "#ababab",
    },
    icon: {
       color : "rgb(154, 161, 176)",
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



export default LoginScreen