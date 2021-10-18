import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
//config
import Colors from '../config/Colors';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';


function ContactusScreen(props) {

    const fieldsData = [
        {
            placeholder: 'A Name...',
        },
        {
            title: 'Email',
            placeholder: '@ example@gmail.com',
            inputHeights: '6.5'
        },
        {
            title: 'Message',
            placeholder: 'Type your message',
            inputHeights: '15'
        },
    ]


    const [inputField, SetInputField] = useState([
        {
            title: 'Name',
            placeholder: 'A Name...',
            inputHeights: '6.5',
            value: "",
        },
        {
            title: 'Email',
            placeholder: '@ example@gmail.com',
            inputHeights: '6.5',
            value: "",
        },
        {
            title: 'Message',
            placeholder: 'Type your message',
            inputHeights: '15',
            value: "",
        },

    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.secondary }}>
            {/* Nav bar with heading */}
            <View style={{ marginTop: RFPercentage(3.5), width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {/* Back Icon */}
                <TouchableOpacity style={{ position: 'absolute', left: RFPercentage(1) }} >
                    <Ionicons name="arrow-back-outline" style={{ fontSize: RFPercentage(3.8) }} color={Colors.black} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: RFPercentage(2.8), color: Colors.black }}>
                    Contact Us
                </Text>
            </View>

            {/* Input Fields */}

            <View style={{ marginTop: RFPercentage(5), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                {inputField.map((item, i) => (
                    <View key={i} style={{ marginTop: RFPercentage(2) }} >
                        <Text style={{ fontSize: RFPercentage(2.4), marginBottom: RFPercentage(1), color: '#858585', marginLeft: RFPercentage(1) }}>
                            {item.title}
                        </Text>
                        <InputField
                            placeholder={item.placeholder}
                            backgroundColor={"#91949B"}
                            borderWidth={0.3}
                            height={RFPercentage(item.inputHeights)}
                            color={Colors.white}
                            placeholderColor={Colors.white}
                            borderColor={"#91949B"}
                            borderRadius={RFPercentage(2.4)}
                            fontSize={RFPercentage(2.5)}
                            handleFeild={(text) => handleChange(text, i)}
                            value={item.value}
                            width={"85%"}
                        />
                    </View>
                ))}
            </View>

            {/* Mobile Details */}
            <View style={{ marginTop: RFPercentage(6), flexDirection: 'row', width: '80%', justifyContent: 'flex-start', alignItems: 'center' }}>
                <TouchableOpacity>
                    <Image style={{ width: RFPercentage(3.5), height: RFPercentage(3.5) }} source={require('../../assets/images/phone.png')} />
                </TouchableOpacity>
                <Text style={{ marginLeft: RFPercentage(3), fontSize: RFPercentage(2.5), color: "#666666" }}>
                    + 12328648493
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
                    width={"80%"}
                />
            </View>

        </Screen>
    );
}

export default ContactusScreen;