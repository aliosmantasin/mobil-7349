import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "../screens/auth/signup";
import HomeScreen from "../screens/auth/home";
import LoginScreen from "../screens/auth/login";

const Stack = createNativeStackNavigator()

export const Router = ( ) => {
    return <NavigationContainer>
          <Stack.Navigator initialRouteName="login">
                <Stack.Screen name="signup" component={SignupScreen}/>
                <Stack.Screen name="login" component={LoginScreen}/>
                <Stack.Screen name="home" component={HomeScreen}/>
          </Stack.Navigator>
    </NavigationContainer>
};