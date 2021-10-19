import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function HousesellScreen(props) {
    const [inputField, SetInputField] = useState([
        {
            placeholder: "Home Address and Location",
            title: 'Title',
            height: RFPercentage(6.9),
            value: "",
        },
        {
            placeholder: "Type your message",
            title: 'Details',
            height: RFPercentage(12),
            value: "",
        },

    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const [secondInputField, SetSecondInputField] = useState([
        {
            placeholder: "Lorem ipsum dolor sit amet, consectetur adi",
            value: "",
        },

    ]);

    const handleChange2 = (text, i) => {
        let tempfeilds = [...secondInputField];
        tempfeilds[i].value = text;
        SetSecondInputField(tempfeilds);

    };
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.secondary }}>
            {/* Nav Bar with menue */}
            <View style={{ marginTop: RFPercentage(3.5), width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {/* Back Icon */}
                <TouchableOpacity style={{ position: 'absolute', left: RFPercentage(1) }} >
                    <Ionicons name="arrow-back-outline" style={{ fontSize: RFPercentage(3.8) }} color={Colors.black} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: RFPercentage(2.7), color: Colors.black }}>
                    Sell House
                </Text>
                {/* Menue Icon */}
                <TouchableOpacity style={{ position: 'absolute', right: RFPercentage(0) }}>
                    <Image source={require('../../assets/images/menu.png')} />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ backgroundColor: Colors.secondary, flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(1) }}>
                    {/* White Boxes */}
                    {inputField.map((item, i) => (
                        <View key={i} style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: i === 0 ? RFPercentage(5) : RFPercentage(2.5), backgroundColor: Colors.white, width: '90%', height: i === 0 ? RFPercentage(19) : RFPercentage(24), borderRadius: RFPercentage(3) }} >
                            <View style={{ marginTop: RFPercentage(1), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <View style={{ marginTop: RFPercentage(2) }} >
                                    <Text style={{ marginBottom: RFPercentage(2), color: '#3E4462', fontSize: RFPercentage(3) }}>
                                        {item.title}
                                    </Text>
                                    <InputField
                                        placeholder={item.placeholder}
                                        backgroundColor={Colors.inputFieldGrey}
                                        borderWidth={0.3}
                                        height={item.height}
                                        borderColor={Colors.inputFieldGrey}
                                        borderRadius={RFPercentage(1)}
                                        fontSize={RFPercentage(2)}
                                        handleFeild={(text) => handleChange(text, i)}
                                        value={item.value}
                                        width={"95%"}
                                    />
                                </View>
                            </View>
                        </View>
                    ))}

                    {/* Image adding components */}
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: RFPercentage(2.5), width: "90%", height: RFPercentage(20), backgroundColor: Colors.white, borderRadius: RFPercentage(3) }}>
                        <View style={{ marginLeft: RFPercentage(2), justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white, width: RFPercentage(10), height: RFPercentage(15) }}>
                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: "center", width: RFPercentage(7), height: RFPercentage(7), borderRadius: RFPercentage(20), backgroundColor: "#E3E3E3" }}>
                                <Image style={{ width: RFPercentage(3), height: RFPercentage(3) }} source={require('../../assets/images/pluss.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Bottom Button */}
                    <View style={{ width: '100%', marginTop: RFPercentage(10), marginBottom: RFPercentage(10) }}>
                        <MyAppButton
                            title="Post News"
                            padding={RFPercentage(1.8)}
                            bold={true}
                            // onPress={() => props.navigation.navigate("LoginScreen2")}
                            backgroundColor={Colors.lightestBrownish}
                            color={Colors.white}
                            width={"80%"}
                        />
                    </View>
                </View>
            </ScrollView>

            {/* Bottom tab */}
            <BottomTab props={props} />
        </Screen>
    );
}

export default HousesellScreen;