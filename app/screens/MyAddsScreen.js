import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import BottomTab from '../components/common/BottomTab';

//components
import Screen from './../components/Screen';
//config
import Colors from './../config/Colors';

function MyAddsScreen(props) {

    const [firstButton, setFirstButton] = useState(true);
    const [secondButton, setSecondButton] = useState(false);

    const cartData = [
        {
            imageSource: require('../../assets/images/h1.png')
        },
        {
            imageSource: require('../../assets/images/h1.png')
        },
        {
            imageSource: require('../../assets/images/h1.png')
        },
        {
            imageSource: require('../../assets/images/h1.png')
        },
    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.secondary }}>

            {/* Top Buttons */}
            <View style={{ marginBottom: RFPercentage(1), justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginTop: RFPercentage(4), width: RFPercentage(45), height: RFPercentage(7), borderRadius: RFPercentage(25), backgroundColor: "#939C840F" }} >
                {/* first button */}
                <TouchableOpacity onPress={() => [setFirstButton(true), setSecondButton(false)]} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: firstButton ? Colors.lightestBrownish : '#939C840F', width: "50%", height: RFPercentage(7), borderRadius: RFPercentage(10) }}>
                    <Text style={{ color: firstButton ? Colors.white : '#4D4D4D', fontSize: RFPercentage(2.6) }}>
                        My Adds
                    </Text>
                </TouchableOpacity>
                {/* second button */}
                <TouchableOpacity onPress={() => [setFirstButton(false), setSecondButton(true)]} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: secondButton ? Colors.lightestBrownish : '#939C840F', width: "50%", height: RFPercentage(7), borderRadius: RFPercentage(10) }}>
                    <Text style={{ color: secondButton ? Colors.white : '#4D4D4D', fontSize: RFPercentage(2.6) }}>
                        Favourite
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{ backgroundColor: Colors.secondary, flex: 1, width: '100%' }} >
                <View style={{ marginBottom: RFPercentage(5), justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(1) }}>

                    {/* Cart */}
                    {cartData.map((item, i) => (

                        <View key={i} style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row', marginTop: RFPercentage(3), alignSelf: 'center', width: '90%', backgroundColor: Colors.toolightGrey, height: RFPercentage(29), borderRadius: RFPercentage(2) }}>
                            <TouchableOpacity style={{ marginTop: RFPercentage(2.3) }}>
                                <Image style={{ marginLeft: RFPercentage(2) }} source={item.imageSource} />
                            </TouchableOpacity>
                            <View style={{ marginLeft: RFPercentage(2.5), marginTop: RFPercentage(2.8) }}>
                                <Text style={{ color: '#616161', fontFamily: 'Inter_500Medium', fontSize: RFPercentage(2) }}>
                                    163 E 81st St #2C, New York,
                                </Text>
                                <Text style={{ marginTop: RFPercentage(1), color: '#616161', fontFamily: 'Inter_500Medium', fontSize: RFPercentage(1.9) }}>
                                    NY 10028
                                </Text>
                                <Text style={{ marginTop: RFPercentage(1), fontFamily: 'Inter_700Bold', fontSize: RFPercentage(2.5), color: "#616161" }}>
                                    $ 8,999
                                </Text>
                                <Text style={{ marginTop: RFPercentage(0.1), color: '#898989', fontFamily: 'Inter_700Bold', fontSize: RFPercentage(1.9) }}>
                                    1600 sqft
                                </Text>

                                <View style={{ marginTop: RFPercentage(3), flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity>
                                        <Image style={{ width: RFPercentage(2.5), height: RFPercentage(2.5) }} source={require('../../assets/images/eye1.png')} />
                                    </TouchableOpacity>
                                    <Text style={{ marginLeft: RFPercentage(1), color: Colors.black, fontSize: RFPercentage(2) }}>
                                        Views: 23
                                    </Text>
                                </View>
                            </View>
                            {/* side button */}
                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', right: RFPercentage(3), bottom: RFPercentage(3), width: RFPercentage(12.5), height: RFPercentage(6), borderRadius: RFPercentage(2), backgroundColor: '#C4C4C4' }}>
                                <Text style={{ fontSize: RFPercentage(1.7), color: Colors.black, fontFamily: 'Inter_500Medium' }}>
                                    Mark as Sold
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
                <View style={{ marginBottom: RFPercentage(8) }} />
            </ScrollView>
            {/* bottom tab */}
            <BottomTab props={props} />

        </Screen>
    );
}

export default MyAddsScreen;