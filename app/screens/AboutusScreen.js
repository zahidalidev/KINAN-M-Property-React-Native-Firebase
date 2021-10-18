import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from './../config/Colors';

function AboutusScreen(props) {

    const dummyText = [
        {
            text: 'Lorem ipsum dolor sit amet'
        },
        {
            text: 'consectetur adipiscing elit, sed do'
        },
        {
            text: 'eiusmod tempor incididunt ut labore et'
        },
        {
            text: 'dolore magna aliqua. Ut enim ad minim'
        },
        {
            text: 'veniam, quis nostrud exercitation'
        },
        {
            text: 'commodo consequat'
        }
    ]
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.secondary }}>
            {/* Nav bar with heading */}
            <View style={{ marginTop: RFPercentage(3.5), width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {/* Back Icon */}
                <TouchableOpacity style={{ position: 'absolute', left: RFPercentage(1) }} >
                    <Ionicons name="arrow-back-outline" style={{ fontSize: RFPercentage(3.8) }} color={Colors.black} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: RFPercentage(2.8), color: Colors.black }}>
                    About Us
                </Text>
            </View>

            {dummyText.map((item, i) => (
                <View key={i} style={{ width: '85%', marginTop: i === 0 ? RFPercentage(5) : RFPercentage(0.5) }}>
                    <Text style={{ alignSelf: 'flex-start', color: Colors.black, fontSize: RFPercentage(2.3), fontFamily: 'Inter_400Regular' }}>
                        {item.text}
                    </Text>
                </View>
            ))}

            {/* Bottom Button */}
            <View style={{ width: '100%', position: 'absolute', bottom: RFPercentage(4) }}>
                <MyAppButton
                    title="Contact Us"
                    padding={RFPercentage(1.8)}
                    bold={true}
                    // onPress={() => props.navigation.navigate("LoginScreen2")}
                    backgroundColor={Colors.lightestBrownish}
                    color={Colors.white}
                    width={"80%"}
                />
            </View>
        </Screen>
    );
}

export default AboutusScreen;