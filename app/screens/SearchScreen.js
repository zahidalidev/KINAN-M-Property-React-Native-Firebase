import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


//components
import InputField from './../components/common/InputField';
import BottomTab from '../components/common/BottomTab';
import Screen from './../components/Screen';

//config
import Colors from './../config/Colors';

function SearchScreen(props) {


    const topCartData = [
        {
            imageSource: require('../../assets/images/cart11.png'),
        },
        {
            imageSource: require('../../assets/images/cart11.png'),
        },
        {
            imageSource: require('../../assets/images/cart11.png'),
        },
        {
            imageSource: require('../../assets/images/cart11.png'),
        },
    ]

    const bottomCartData = [
        {
            imageSource: require('../../assets/images/bottomC1.png')
        },
        {
            imageSource: require('../../assets/images/bottomC2.png')
        },
        {
            imageSource: require('../../assets/images/bottomC1.png')
        },
        {
            imageSource: require('../../assets/images/bottomC2.png')
        },
    ]

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Home, Villas, Property",
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: "#E5E5E5" }}>

            {/* Nav Bar with menue */}
            <View style={{ marginTop: RFPercentage(3.5), width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {/* Back Icon */}
                <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")} style={{ position: 'absolute', left: RFPercentage(1) }} >
                    <Ionicons name="arrow-back-outline" style={{ fontSize: RFPercentage(3.8) }} color={Colors.black} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: RFPercentage(3), color: Colors.black }}>
                    Search
                </Text>
                {/* Menue Icon */}
                <TouchableOpacity style={{ position: 'absolute', right: RFPercentage(0) }}>
                    <Image style={{ width: RFPercentage(3.5), height: RFPercentage(2) }} source={require('../../assets/images/hMenue.png')} />
                </TouchableOpacity>
            </View>

            {/* Input Fields */}
            <View style={{ marginTop: RFPercentage(2), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                {inputField.map((item, i) => (
                    <View key={i} style={{ marginTop: RFPercentage(2) }} >
                        <InputField
                            placeholder={item.placeholder}
                            backgroundColor={Colors.white}
                            borderColor={"#E3E5E5"}
                            borderWidth={0}
                            leftIconName={"search"}
                            borderRadius={RFPercentage(1)}
                            fontSize={RFPercentage(2.3)}
                            handleFeild={(text) => handleChange(text, i)}
                            value={item.value}
                            width={"98%"}
                        />
                    </View>
                ))}
            </View>
            {/* Side headings */}
            <View style={{ marginTop: RFPercentage(6), flexDirection: 'row', width: '90%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ position: 'absolute', left: 0, fontSize: RFPercentage(2.2), fontWeight: 'bold', color: Colors.black }}>Top results</Text>
                <TouchableOpacity style={{ position: 'absolute', right: 0 }}>
                    <Text style={{ color: Colors.lightestBrownish, fontSize: RFPercentage(2) }}>Show all</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{ backgroundColor: "#E5E5E5", flex: 1, width: '100%', marginTop: RFPercentage(2) }} >

                {/* Horizental scrolling cart */}
                <ScrollView horizontal={true} style={{ marginTop: RFPercentage(5), width: '100%', backgroundColor: "#E5E5E5" }}>
                    {/* Container */}
                    <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        {/* MiniContainer */}
                        {topCartData.map((item, i) => (

                            <View key={i} style={{ marginLeft: RFPercentage(2.5), borderRadius: RFPercentage(3), alignItems: 'flex-start', justifyContent: 'flex-start', width: RFPercentage(33), height: RFPercentage(52), backgroundColor: Colors.white }}>
                                {/* Top Image */}
                                <Image style={{ borderRadius: RFPercentage(2), width: RFPercentage(33), height: RFPercentage(28), justifyContent: 'flex-start', alignItems: 'flex-start' }} source={item.imageSource} />
                                {/* Heart Icon */}
                                <TouchableOpacity style={{ position: 'absolute', top: RFPercentage(2), right: RFPercentage(2), justifyContent: 'center', alignItems: 'center', width: RFPercentage(4.5), height: RFPercentage(4.5), borderRadius: RFPercentage(20), backgroundColor: Colors.white }}>
                                    <Image source={require('../../assets/images/heart2.png')} />
                                </TouchableOpacity>
                                {/* Descrription */}
                                <View style={{ marginTop: RFPercentage(2), alignSelf: 'center', width: '80%', alignItems: 'flex-start', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: RFPercentage(2), marginTop: RFPercentage(2) }}>
                                        abcsd apartment
                                    </Text>
                                    <Text style={{ fontSize: RFPercentage(2), marginTop: RFPercentage(0.5) }}>
                                        near Connecticut,
                                    </Text>
                                    <Text style={{ fontSize: RFPercentage(2), marginTop: RFPercentage(0.5) }}>
                                        USA
                                    </Text>
                                </View>
                                {/* stars */}
                                <TouchableOpacity style={{ marginTop: RFPercentage(2), alignSelf: 'center', flexDirection: 'row', width: '80%', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <Stars
                                        default={3}
                                        count={5}
                                        half={false}
                                        starSize={RFPercentage(7)}
                                        fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
                                        emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                                        halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
                                    />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>


                </ScrollView>

                <Text style={{ fontSize: RFPercentage(2.2), marginLeft: RFPercentage(3.2), marginTop: RFPercentage(5), color: Colors.black, fontFamily: 'Montserrat_500Medium' }}>
                    Recommendation!
                </Text>

                {/* bottom cart */}
                {bottomCartData.map((item, i) => (
                    <View key={i} style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginTop: i === 0 ? RFPercentage(3) : RFPercentage(0), alignSelf: 'center', width: '90%', backgroundColor: "#E5E5E5", height: RFPercentage(15) }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("HouseDetailsScreen")}>
                            <Image style={{ width: RFPercentage(11.5), height: RFPercentage(11.5), marginLeft: RFPercentage(3) }} source={item.imageSource} />
                        </TouchableOpacity>
                        <View style={{ marginLeft: RFPercentage(2) }}>
                            <View style={{ flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/images/location1.png')} />
                                </TouchableOpacity>
                                <Text style={{ marginLeft: RFPercentage(1), color: Colors.darkBlue, fontSize: RFPercentage(1.9) }}>
                                    Connecticut
                                </Text>
                            </View>
                            <Text style={{ marginTop: RFPercentage(1), fontFamily: 'Montserrat_600SemiBold', fontSize: RFPercentage(2.2), color: Colors.black }}>
                                House Name
                            </Text>
                            <View style={{ marginTop: RFPercentage(0.5), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../../assets/images/groupStars.png')} />
                                <Text style={{ marginLeft: RFPercentage(1), color: Colors.greyDark, fontSize: RFPercentage(2) }}>
                                    4.5 of of 5
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}
                <View style={{ marginBottom: RFPercentage(10) }}></View>
            </ScrollView>
            {/* Bottom Tab */}
            <BottomTab props={props} />


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
        fontSize: RFPercentage(3.2)
    },
    myEmptyStarStyle: {
        color: 'white',
    }
});

export default SearchScreen;