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
import HomeHistoryScreen from './app/screens/HomeHistoryScreen';
import PropertyHistoryScreen from './app/screens/PropertyHistoryScreen';

//custom fonts
import { Inter_700Bold, Inter_500Medium, Inter_400Regular, useFonts } from "@expo-google-fonts/inter"
import { Montserrat_500Medium, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import SearchScreen from './app/screens/SearchScreen';
import MyAddsScreen from './app/screens/MyAddsScreen';

const Stack = createStackNavigator()

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_500Medium,
    Inter_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold
  })
  if (!fontsLoaded) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
    <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
  </View>

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="MyAddsScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MyAddsScreen" component={MyAddsScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="PropertyHistoryScreen" component={PropertyHistoryScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginScreen2" component={LoginScreen2} />
        <Stack.Screen name="HomeHistoryScreen" component={HomeHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


