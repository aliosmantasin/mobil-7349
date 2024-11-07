import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "../screens/auth/signup";
import HomeScreen from "../screens/home";
import LoginScreen from "../screens/auth/login";

const Stack = createNativeStackNavigator()

export const Router = ( ) => {
    return <NavigationContainer>
          <Stack.Navigator initialRouteName="login" screenOptions={{
            headerShown: false,
          
          }}>
                <Stack.Screen name="signup" component={SignupScreen}/>
                <Stack.Screen name="login" component={LoginScreen}/>
                <Stack.Screen name="home-page" component={HomeScreen}/>
          </Stack.Navigator>
    </NavigationContainer>
};