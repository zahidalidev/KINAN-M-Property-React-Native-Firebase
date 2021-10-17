import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//conponents
import Screen from './../components/Screen';
// config
import Colors from './../config/Colors';
import BottomTab from '../components/common/BottomTab';


function NewsScreen(props) {

    const cartData = [
        {
            imageSource: require('../../assets/images/p1.png')
        },
        {
            imageSource: require('../../assets/images/p1.png')
        },
        {
            imageSource: require('../../assets/images/p1.png')
        },
        {
            imageSource: require('../../assets/images/p1.png')
        },
        {
            imageSource: require('../../assets/images/p1.png')
        },
        {
            imageSource: require('../../assets/images/p1.png')
        },
        {
            imageSource: require('../../assets/images/p1.png')
        },
        {
            imageSource: require('../../assets/images/p1.png')
        },
    ]
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.lightestBrownish }}>

            {/* Nav */}
            <View style={{ marginTop: RFPercentage(3.5), width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {/* Back Icon */}
                <TouchableOpacity style={{ position: 'absolute', left: RFPercentage(1) }} >
                    <Ionicons name="arrow-back-outline" style={{ fontSize: RFPercentage(4.5) }} color={Colors.white} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: RFPercentage(3.4), color: Colors.white }}>
                    News
                </Text>
            </View>
            {/* White Container */}
            <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', height: "87%", backgroundColor: Colors.lightWhite, width: '95%', position: 'absolute', right: 0, bottom: 0, borderTopLeftRadius: RFPercentage(5) }}>
                <ScrollView style={{ borderTopLeftRadius: RFPercentage(5), backgroundColor: Colors.lightWhite, flex: 1, width: '100%' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(1) }}>
                        {cartData.map((item, i) => (

                            <View key={i} style={{ flexDirection: 'row', marginTop: i === 0 ? RFPercentage(5) : RFPercentage(3), marginLeft: RFPercentage(0), justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <TouchableOpacity >
                                    <Image source={item.imageSource} />
                                </TouchableOpacity>
                                <View style={{ marginLeft: RFPercentage(2) }}>
                                    <Text style={{ fontSize: RFPercentage(2.5), fontFamily: 'Montserrat_600SemiBold' }}>
                                        Brandon Wolfel
                                    </Text>
                                    <Text style={{ marginTop: RFPercentage(0.6), color: Colors.black, fontSize: RFPercentage(1.7), fontFamily: 'Montserrat_500Medium' }}>
                                        Lorem ipsum dolor sit amet,cipsum
                                    </Text>
                                    <Text style={{ position: 'absolute', right: 0, bottom: RFPercentage(2), fontSize: RFPercentage(1.9) }}>10:25</Text>
                                    <View style={{ marginBottom: RFPercentage(1), justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: RFPercentage(5), width: '100%', height: RFPercentage(0.1), backgroundColor: Colors.grey }} >
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={{ marginBottom: RFPercentage(15) }} />
                </ScrollView>
                <TouchableOpacity style={{ position: 'absolute', bottom: RFPercentage(6), right: RFPercentage(4) }}>
                    <Image style={{ width: RFPercentage(12.5), height: RFPercentage(12.5) }} source={require('../../assets/images/plus1.png')} />
                </TouchableOpacity>
                {/* bottom tab */}
                <BottomTab props={props} />
            </View >

        </Screen >
    );
}

export default NewsScreen;