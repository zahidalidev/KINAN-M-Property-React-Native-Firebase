import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';

//config
import Colors from './../config/Colors';
import BottomTab from '../components/common/BottomTab';

function DiscoverScreen(props) {

    const cartData = [
        {
            imageSource: require('../../assets/images/bitmap.png')
        },
        {
            imageSource: require('../../assets/images/bitmap.png')
        },
        {
            imageSource: require('../../assets/images/bitmap.png')
        },
        {
            imageSource: require('../../assets/images/bitmap.png')
        },
    ]

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Search",
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
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: RFPercentage(2.7), color: Colors.black }}>
                    Discover
                </Text>
                {/* Menue Icon */}
                <TouchableOpacity onPress={() => props.navigation.openDrawer()} style={{ position: 'absolute', right: RFPercentage(0) }}>
                    <Image style={{ width: RFPercentage(4), height: RFPercentage(3) }} source={require('../../assets/images/hMenue.png')} />
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

            {/* Cart */}
            <ScrollView style={{ backgroundColor: "#E5E5E5", flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(1) }}>
                    {cartData.map((item, i) => (
                        <View key={i} style={{ justifyContent: 'flex-start', alignItems: 'center', marginTop: RFPercentage(3), width: '90%', height: RFPercentage(50), backgroundColor: Colors.white, borderRadius: RFPercentage(2) }}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("HouseDetailsScreen")} style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ borderRadius: RFPercentage(2), width: '100%', height: RFPercentage(30) }} source={item.imageSource} />
                            </TouchableOpacity>
                            <View style={{ marginTop: RFPercentage(3), width: '90%', flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'flex-start' }}>
                                <Text style={{ fontFamily: 'Inter_700Bold', fontSize: RFPercentage(2.5) }}>
                                    White Smith Villa House
                                </Text>
                                <TouchableOpacity style={{ borderRadius: RFPercentage(0.8), height: RFPercentage(5.5), width: RFPercentage(12), justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, backgroundColor: '#E0D3A775' }}>
                                    <Text style={{ fontSize: RFPercentage(2.2), color: Colors.black, fontFamily: 'Inter_500Medium' }}>
                                        $5000
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: RFPercentage(1.8), width: '90%', alignSelf: 'center', alignItems: 'flex-start', justifyContent: 'center' }}>
                                <Stars
                                    default={3}
                                    count={5}
                                    half={false}
                                    starSize={RFPercentage(7)}
                                    fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
                                    emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                                    halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
                                />
                                <Text style={{ marginTop: RFPercentage(1), fontFamily: 'Inter_400Regular', fontSize: RFPercentage(2), color: '#8A959ECC' }}>
                                    5.0 Stars Customers Reviews
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
                <View style={{ marginBottom: RFPercentage(12) }} />
            </ScrollView>
            {/* Bottom tab */}
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
        fontSize: RFPercentage(2.5)
    },
    myEmptyStarStyle: {
        color: 'white',
    }
});

export default DiscoverScreen;