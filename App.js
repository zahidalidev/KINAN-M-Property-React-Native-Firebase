import React from 'react';
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from './app/config/Colors';

//Screens
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import SignupScreen from './app/screens/SignupScreen';
import LoginScreen2 from './app/screens/LoginScreen2';
import HomeScreen from './app/screens/HomeScreen';
import AccountScreen from './app/screens/AccountScreen';

//customfonts
import { Inter_700Bold, Inter_500Medium, Inter_400Regular, useFonts } from "@expo-google-fonts/inter"

const Stack = createStackNavigator()

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_500Medium,
    Inter_400Regular
  })
  if (!fontsLoaded) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
    <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
  </View>

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="AccountScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginScreen2" component={LoginScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


