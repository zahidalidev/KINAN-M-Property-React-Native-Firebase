import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';

function WelcomeScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            {/* background image */}
            <ImageBackground style={styles.imageContainer} source={require('../../assets/images/welcome.png')}>
                {/* Logo */}
                <Image style={{ width: RFPercentage(35), height: RFPercentage(35) }} source={require('../../assets/images/logo.png')} />
                {/* Title */}
                <Text style={{ color: '#444444', fontSize: RFPercentage(3.7), fontWeight: 'bold' }}>Let's find your</Text>
                <Text style={{ color: '#444444', fontSize: RFPercentage(3.7), fontWeight: 'bold' }}>dream house</Text>
                {/* Next Button */}
                <TouchableOpacity onPress={() => props.navigation.navigate("LoginScreen")} style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: RFPercentage(15) }}>
                    <Image style={{ width: RFPercentage(8.6), height: RFPercentage(8.6) }} source={require('../../assets/images/next.png')} />
                </TouchableOpacity>
            </ImageBackground>
        </Screen>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%'
    },
})

export default WelcomeScreen;