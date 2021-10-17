import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
//config
import Colors from './../config/Colors';

function MyAddsScreen(props) {

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
            </ScrollView>

        </Screen>
    );
}

export default MyAddsScreen;