import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
//config
import Colors from './../config/Colors';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import MyAppButton from './../components/common/MyAppButton';

function HelpScreen(props) {

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
                <TouchableOpacity onPress={() => props.navigation.navigate("PropertyHistoryScreen")} style={{ position: 'absolute', left: RFPercentage(1) }} >
                    <Ionicons name="arrow-back-outline" style={{ fontSize: RFPercentage(3.8) }} color={Colors.black} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: RFPercentage(2.8), color: Colors.black }}>
                    HELP/FAQ
                </Text>
            </View>

            {dummyText.map((item, i) => (
                <View key={i} style={{ width: '85%', marginTop: i === 0 ? RFPercentage(5) : RFPercentage(0.5) }}>
                    <Text style={{ alignSelf: 'flex-start', color: Colors.black, fontSize: RFPercentage(2.3), fontFamily: 'Inter_400Regular' }}>
                        {item.text}
                    </Text>
                </View>
            ))}
            {/* Questions */}
            <View style={{ width: '85%', marginTop: RFPercentage(5) }}>
                <Text style={{ alignSelf: 'flex-start', color: Colors.black, fontSize: RFPercentage(2.5), fontFamily: 'Inter_700Bold' }}>
                    FAQ
                </Text>
                <Text style={{ marginTop: RFPercentage(4), alignSelf: 'flex-start', color: Colors.black, fontSize: RFPercentage(2.5), fontFamily: 'Inter_700Bold' }}>
                    Q. Lorem ipsum dolor sit amet?
                </Text>
                <Text style={{ marginLeft: RFPercentage(3), marginTop: RFPercentage(1), alignSelf: 'flex-start', color: Colors.black, fontSize: RFPercentage(2), fontFamily: 'Inter_400Regular' }}>
                    consectetur adipiscing elit.
                </Text>
            </View>
            <View style={{ width: '85%', marginTop: RFPercentage(0) }}>
                <Text style={{ marginTop: RFPercentage(4), alignSelf: 'flex-start', color: Colors.black, fontSize: RFPercentage(2.5), fontFamily: 'Inter_700Bold' }}>
                    Q. magna aliqua. Ut enim ad minim veniam.
                </Text>
                <Text style={{ marginLeft: RFPercentage(3), marginTop: RFPercentage(1), alignSelf: 'flex-start', color: Colors.black, fontSize: RFPercentage(2), fontFamily: 'Inter_400Regular' }}>
                    quis nostrud exercitation ullamco laboris
                </Text>
                <Text style={{ marginLeft: RFPercentage(3), marginTop: RFPercentage(0), alignSelf: 'flex-start', color: Colors.black, fontSize: RFPercentage(2), fontFamily: 'Inter_400Regular' }}>
                    nisi ut aliquip ex ea commodo consequa
                </Text>
            </View>

            {/* Bottom Button */}
            <View style={{ width: '100%', position: 'absolute', bottom: RFPercentage(4) }}>
                <MyAppButton
                    title="Contact Us"
                    padding={RFPercentage(1.8)}
                    bold={true}
                    // onPress={() => props.navigation.navigate("LoginScreen2")}
                    backgroundColor={Colors.lightestBrownish}
                    color={Colors.white}
                    width={"60%"}
                />
            </View>
        </Screen>
    );
}

export default HelpScreen;