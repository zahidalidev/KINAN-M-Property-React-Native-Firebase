import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function HouseDetailsScreen(props) {

    const textDetail = [
        {
            text: 'Lorem ipsum dolor sit amet, consectetur'
        },
        {
            text: 'Nam mattis tortor at cursus imperdiet. Nulla efficitur'
        },
        {
            text: 'mi et condimentum eleifend, massa risus suscipit vel'
        },
        {
            text: 'pellentesque varius massa nunc read more.'
        },
    ]


    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            {/* Nav Bar with menue */}
            <View style={{ marginTop: RFPercentage(3.5), width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {/* Back Icon */}
                <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")} style={{ position: 'absolute', left: RFPercentage(1) }} >
                    <Ionicons name="arrow-back-outline" style={{ fontSize: RFPercentage(3.8) }} color={Colors.black} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: RFPercentage(2.7), color: Colors.black }}>
                    House
                </Text>
                {/* Menue Icon */}
                <TouchableOpacity onPress={() => props.navigation.openDrawer()} style={{ position: 'absolute', right: RFPercentage(0) }}>
                    <Image style={{ width: RFPercentage(4.2), height: RFPercentage(2.8) }} source={require('../../assets/images/menu.png')} />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ backgroundColor: Colors.white, flex: 1, width: '100%' }} >

                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(1) }}>

                    {/* Top Image */}
                    <TouchableOpacity activeOpacity={0.8} style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: '90%', height: RFPercentage(27.9), marginTop: RFPercentage(5) }} source={require('../../assets/images/houseshape.png')} />
                    </TouchableOpacity>

                    {/* Text Details */}
                    <View style={{ marginTop: RFPercentage(4.2), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>

                        <Text style={{ fontFamily: 'Inter_500Medium', color: Colors.black, fontSize: RFPercentage(2.5) }}>
                            About this House
                        </Text>

                        <View style={{ position: 'absolute', right: RFPercentage(3) }}>
                            <Stars
                                default={3}
                                count={5}
                                half={false}
                                starSize={RFPercentage(7)}
                                fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
                                emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                                halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
                            />
                        </View>
                    </View>

                    {/*details about post text */}
                    <View style={{ width: '90%', marginTop: RFPercentage(3) }}>
                        {textDetail.map((item, i) => (
                            <Text key={i} style={{ marginTop: RFPercentage(0.5), color: Colors.black, fontSize: RFPercentage(2.1) }} >
                                {item.text}
                            </Text>
                        ))}
                    </View>

                    {/* Location View */}
                    <View style={{ marginTop: RFPercentage(3), width: '90%', borderRadius: RFPercentage(6), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: RFPercentage(35), height: RFPercentage(9), borderRadius: RFPercentage(10), backgroundColor: Colors.lightestBrownish }} >
                            <TouchableOpacity>
                                <Image style={{ marginLeft: RFPercentage(3), width: RFPercentage(3.2), height: RFPercentage(3.2) }} source={require('../../assets/images/map.png')} />
                            </TouchableOpacity>
                            <View style={{ marginLeft: RFPercentage(1.5) }}>
                                <Text style={{ fontSize: RFPercentage(2.3), color: Colors.white }}>
                                    2345 block1
                                </Text>
                                <Text style={{ marginTop: RFPercentage(0.5), fontSize: RFPercentage(2.3), color: Colors.white }}>
                                    1804 Brookside Dr, Fr...
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity>
                            <Image style={{ marginLeft: RFPercentage(3), width: RFPercentage(4), height: RFPercentage(4) }} source={require('../../assets/images/forward.png')} />
                        </TouchableOpacity>
                    </View>

                    {/* First Row */}
                    <View style={{ marginTop: RFPercentage(4), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                        {/* left Boxe */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: Colors.inputFieldGrey, width: '40%', height: RFPercentage(10), borderRadius: RFPercentage(2) }} >
                            <Image style={{ width: RFPercentage(3.5), height: RFPercentage(3.5) }} source={require('../../assets/images/rec.png')} />
                            <View style={{ marginLeft: RFPercentage(2), justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <Text style={{ color: Colors.black, fontFamily: 'Inter_700Bold' }}>
                                    Area
                                </Text>
                                <Text style={{ color: Colors.black, fontFamily: 'Inter_700Bold' }}>
                                    1.604 sqft
                                </Text>
                            </View>
                        </View>

                        {/* right boxe */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: Colors.inputFieldGrey, width: '40%', height: RFPercentage(10), borderRadius: RFPercentage(2), position: 'absolute', right: RFPercentage(0) }} >
                            <Image style={{ width: RFPercentage(4.6), height: RFPercentage(3.7) }} source={require('../../assets/images/car.png')} />
                            <View style={{ marginLeft: RFPercentage(2), justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <Text style={{ color: Colors.black, fontFamily: 'Inter_700Bold' }}>
                                    Parking
                                </Text>
                                <Text style={{ color: Colors.black, fontFamily: 'Inter_700Bold' }}>
                                    1 Indoor
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Second Row */}
                    <View style={{ marginTop: RFPercentage(4), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                        {/* left Boxe */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: Colors.inputFieldGrey, width: '40%', height: RFPercentage(10), borderRadius: RFPercentage(2) }} >
                            <Image style={{ width: RFPercentage(3.5), height: RFPercentage(3.8) }} source={require('../../assets/images/bed.png')} />
                            <View style={{ marginLeft: RFPercentage(2), justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <Text style={{ color: Colors.black, fontFamily: 'Inter_700Bold' }}>
                                    Area
                                </Text>
                                <Text style={{ color: Colors.black, fontFamily: 'Inter_700Bold' }}>
                                    1.604 sqft
                                </Text>
                            </View>
                        </View>

                        {/* right boxe */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: Colors.inputFieldGrey, width: '40%', height: RFPercentage(10), borderRadius: RFPercentage(2), position: 'absolute', right: RFPercentage(0) }} >
                            <Image style={{ width: RFPercentage(4.6), height: RFPercentage(3.7) }} source={require('../../assets/images/bath.png')} />
                            <View style={{ marginLeft: RFPercentage(2), justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <Text style={{ color: Colors.black, fontFamily: 'Inter_700Bold' }}>
                                    Parking
                                </Text>
                                <Text style={{ color: Colors.black, fontFamily: 'Inter_700Bold' }}>
                                    1 Indoor
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Bottom Button */}
                    <View style={{ width: '100%', marginTop: RFPercentage(10), marginBottom: RFPercentage(10) }}>
                        <MyAppButton
                            title="Contact Dealer"
                            onPress={() => props.navigation.navigate("ContactusScreen")}
                            padding={RFPercentage(2)}
                            bold={true}
                            backgroundColor={Colors.lightestBrownish}
                            color={Colors.white}
                            width={"80%"}
                        />
                    </View>

                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    myStarStyle: {
        color: Colors.lightOrange,
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 2,
        fontSize: RFPercentage(2.5),
    },
    myEmptyStarStyle: {
        color: 'white',
    }
});

export default HouseDetailsScreen;