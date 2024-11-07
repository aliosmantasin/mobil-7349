import { View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, StatusBar } from 'react-native'
import React, { PropsWithChildren } from 'react'

const ScreenWrapper = ({children}: PropsWithChildren) => {
  return (
    <SafeAreaView style={{
      backgroundColor:"white",
      height:"100%",
    }}>
    <View style={{
        paddingHorizontal: 40,
        marginTop: 20
    }}>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={120}
      style={{
        paddingTop: StatusBar.currentHeight,
        // backgroundColor:"white",
      }}
      >
        

      <ScrollView showsVerticalScrollIndicator={false}>
      {children}
      </ScrollView>

      </KeyboardAvoidingView>
 
     
    </View>
    </SafeAreaView>
  )
}

export default ScreenWrapper