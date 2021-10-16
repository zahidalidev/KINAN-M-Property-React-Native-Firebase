import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
// config
import Colors from './../config/Colors';

function HomeHistoryScreen(props) {

    const cartData = [
        {
            imageSource: require('../../assets/images/c1.png'),
            mainTitle: ' 163 E 81st St #2C, New York,',
            subTitle: 'NY 10028',
            bottomTitle1: ' $ 8.999',
            bottomTitle2: '1600 sqft'
        },
        {
            imageSource: require('../../assets/images/c1.png'),
            mainTitle: ' 163 E 81st St #2C, New York,',
            subTitle: 'NY 10028',
            bottomTitle1: ' $ 8.999',
            bottomTitle2: '1600 sqft'
        },
        {
            imageSource: require('../../assets/images/c2.png'),
            mainTitle: ' 163 E 81st St #2C, New York,',
            subTitle: 'NY 10028',
            bottomTitle1: ' $ 8.999',
            bottomTitle2: '1600 sqft'
        },
        {
            imageSource: require('../../assets/images/c3.png'),
            mainTitle: ' 163 E 81st St #2C, New York,',
            subTitle: 'NY 10028',
            bottomTitle1: ' $ 8.999',
            bottomTitle2: '1600 sqft'
        },
        {
            imageSource: require('../../assets/images/c4.png'),
            mainTitle: ' 163 E 81st St #2C, New York,',
            subTitle: 'NY 10028',
            bottomTitle1: ' $ 8.999',
            bottomTitle2: '1600 sqft'
        },
        {
            imageSource: require('../../assets/images/c4.png'),
            mainTitle: ' 163 E 81st St #2C, New York,',
            subTitle: 'NY 10028',
            bottomTitle1: ' $ 8.999',
            bottomTitle2: '1600 sqft'
        },

    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.secondary }}>
            {/* Nav bar with heading */}
            <View style={{ marginTop: RFPercentage(3.5), width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {/* Back Icon */}
                <TouchableOpacity style={{ position: 'absolute', left: RFPercentage(1) }} >
                    <Ionicons name="arrow-back-outline" style={{ fontSize: RFPercentage(4.5) }} color={Colors.black} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: RFPercentage(3.3), color: Colors.black }}>
                    Home History
                </Text>
            </View>

            {/* cart */}
            <ScrollView style={{ backgroundColor: Colors.secondary, flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(1) }}>
                    {cartData.map((item, i) => (
                        <View key={i} style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginTop: RFPercentage(4), width: '90%', height: RFPercentage(16), borderRadius: RFPercentage(3), backgroundColor: Colors.pink }}>
                            <TouchableOpacity>
                                <Image style={{ marginLeft: RFPercentage(3) }} source={item.imageSource} />
                            </TouchableOpacity>
                            <View style={{ marginLeft: RFPercentage(2.5) }}>
                                <Text style={{ fontFamily: 'Inter_500Medium', fontSize: RFPercentage(2), color: "#616161" }}>
                                    {item.mainTitle}
                                </Text>
                                <Text style={{ marginTop: RFPercentage(1.5), fontSize: RFPercentage(2), color: Colors.lightBrown }}>
                                    {item.subTitle}
                                </Text>
                                <Text style={{ marginTop: RFPercentage(1), fontSize: RFPercentage(2), color: "#616161" }}>
                                    {item.bottomTitle1}
                                </Text>
                                <Text style={{ fontFamily: 'Inter_500Medium', marginTop: RFPercentage(0.5), fontSize: RFPercentage(1.7), color: "#616161" }}>
                                    {item.bottomTitle2}
                                </Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', position: 'absolute', right: RFPercentage(6), bottom: RFPercentage(1.5) }}>
                                <Text style={{ marginTop: RFPercentage(0.4), alignSelf: 'center', fontSize: RFPercentage(1.8) }}>5</Text>
                                <Image style={{ width: RFPercentage(2), height: RFPercentage(2), marginLeft: RFPercentage(0.5) }} source={require('../../assets/images/star.png')} />
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={{ marginBottom: RFPercentage(10) }} />
        </Screen>
    );
}

export default HomeHistoryScreen;