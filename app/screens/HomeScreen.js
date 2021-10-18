import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
//config
import Colors from '../config/Colors';
import InputField from './../components/common/InputField';
import { Inter_700Bold } from '@expo-google-fonts/inter';
import BottomTab from '../components/common/BottomTab';

function HomeScreen(props) {

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

    const cartData = [
        {
            likesTitle: '14.5k',
            personName: 'By ABCD Person',
            profileImageSource: require('../../assets/images/profile.png')
        },
        {
            likesTitle: '14.5k',
            personName: 'By ABCD Person',
            profileImageSource: require('../../assets/images/profile2.png')
        },
        {
            likesTitle: '14.5k',
            personName: 'By ABCD Person',
            profileImageSource: require('../../assets/images/profile.png')
        },
        {
            likesTitle: '14.5k',
            personName: 'By ABCD Person',
            profileImageSource: require('../../assets/images/profile.png')
        },
    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "flex-start", backgroundColor: Colors.secondary }}>
            {/* Nav Container */}
            <View style={{ marginLeft: RFPercentage(2), width: '90%', flexDirection: 'row', alignItems: 'center', marginTop: RFPercentage(2) }}>
                {/* Profile Image */}
                <TouchableOpacity >
                    <Image source={require('../../assets/images/avatar.png')} />
                </TouchableOpacity>
                <View style={{ marginLeft: RFPercentage(1.5) }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontSize: RFPercentage(2.6) }}>
                            Hello
                        </Text>
                        <Text style={{ fontWeight: '700', marginLeft: RFPercentage(0.5), fontSize: RFPercentage(2.6) }}>
                            Jean
                        </Text>
                    </View>
                    <Text style={{ color: Colors.grey, fontSize: RFPercentage(1.9) }}>
                        Welcome Back
                    </Text>
                </View>
                {/* Menue Icon */}
                <TouchableOpacity style={{ position: 'absolute', right: RFPercentage(0) }}>
                    <Image source={require('../../assets/images/menu.png')} />
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
                            width={"95%"}
                        />
                    </View>
                ))}
            </View>
            <ScrollView style={{ backgroundColor: Colors.secondary, flex: 1, width: '100%', marginTop: RFPercentage(2) }} >

                {/* Horizental scrolling cart */}
                <ScrollView horizontal={true} style={{ marginTop: RFPercentage(3), width: '100%', backgroundColor: Colors.secondary }}>
                    <View style={{ width: RFPercentage(200), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        {cartData.map((item, i) => (
                            <TouchableOpacity key={i} style={{ marginLeft: RFPercentage(2.5), borderRadius: RFPercentage(3), alignItems: 'flex-start', justifyContent: 'center', width: RFPercentage(30), height: RFPercentage(30) }}>
                                <ImageBackground style={{ width: RFPercentage(30), height: RFPercentage(30), justifyContent: 'flex-start', alignItems: 'flex-start' }} source={require('../../assets/images/cart1.png')} >
                                    <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: RFPercentage(2), marginTop: RFPercentage(2) }}>
                                        <Ionicons name="eye-sharp" style={{ fontSize: RFPercentage(2.5) }} color={Colors.white} />
                                        <Text style={{ marginLeft: RFPercentage(0.5), color: Colors.white }}>{item.likesTitle}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', flexDirection: 'row', position: 'absolute', bottom: RFPercentage(3), marginLeft: RFPercentage(2) }}>
                                        <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={item.profileImageSource} />
                                        <Text style={{ marginLeft: RFPercentage(1), color: Colors.white, fontSize: RFPercentage(1.8) }}>{item.personName} </Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>

                <Text style={{ fontSize: RFPercentage(1.9), marginLeft: RFPercentage(3.2), marginTop: RFPercentage(2), color: Colors.grey }}>
                    Latest News
                </Text>

                {/* Single cart */}
                <View style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginTop: RFPercentage(3), alignSelf: 'center', width: '90%', backgroundColor: Colors.white, height: RFPercentage(13), borderRadius: RFPercentage(3) }}>
                    <TouchableOpacity>
                        <Image style={{ marginLeft: RFPercentage(3) }} source={require('../../assets/images/p2.png')} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: RFPercentage(2) }}>
                        <Text style={{ fontSize: RFPercentage(2.3), color: Colors.black }}>Person Name</Text>
                        <Text style={{ color: Colors.greyDark, fontSize: RFPercentage(1.8) }}>I am renting my house for 2 years</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: RFPercentage(10), marginLeft: RFPercentage(3), width: RFPercentage(3), height: RFPercentage(3), backgroundColor: "#939c84" }}>
                        <Text style={{ alignSelf: 'center', color: Colors.white, fontSize: RFPercentage(2) }} >6</Text>
                    </View>
                </View>

                <Text style={{ fontSize: RFPercentage(2.5), marginLeft: RFPercentage(3.2), marginTop: RFPercentage(5), color: Colors.black, fontFamily: 'Inter_700Bold' }}>
                    Recommendation!
                </Text>
                {/* Destinations Pics */}
                <View style={{ marginBottom: RFPercentage(10), marginLeft: RFPercentage(3), width: '90%', justifyContent: 'space-evenly', alignItems: 'center', marginTop: RFPercentage(3), flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/bottomCart1.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/bottomCart2.png')} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* Bottom tab */}
            <BottomTab props={props} />
        </Screen>
    );
}

export default HomeScreen;