import React, { useState } from 'react';
import { TouchableOpacity, View, Text, ImageBackground, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function SignupScreen(props) {

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Name",
            value: "",
        },
        {
            placeholder: "Password",
            value: "",
            secure: true
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "flex-start", backgroundColor: Colors.white }}>
            {/* Mini Container till bottom image */}
            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: RFPercentage(5), marginTop: RFPercentage(2) }}>
                {/* Back Icon */}
                <TouchableOpacity onPress={() => props.navigation.navigate("LoginScreen")}>
                    <Ionicons name="arrow-back-outline" style={{ fontSize: RFPercentage(4.5) }} color={Colors.black} />
                </TouchableOpacity>
                <Text style={{ fontSize: RFPercentage(4.3), fontWeight: 'bold', marginTop: RFPercentage(2) }}>
                    Signup
                </Text>
                <Text style={{ color: Colors.lightGrey, fontSize: RFPercentage(2.1), marginTop: RFPercentage(1.3) }}>
                    Let’s explore your dream house
                </Text>
                {/* Input field */}
                <View style={{ marginTop: RFPercentage(2), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Input Fields */}
                    {inputField.map((item, i) => (
                        <View key={i} >
                            <InputField
                                placeholder={item.placeholder}
                                backgroundColor={Colors.white}
                                borderColor={"#E3E5E5"}
                                secure={item.secure}
                                borderRadius={RFPercentage(1)}
                                fontSize={RFPercentage(2)}
                                handleFeild={(text) => handleChange(text, i)}
                                value={item.value}
                                width={"95%"}
                            />
                        </View>
                    ))}
                </View>
                <Text style={{ color: '#7A7E80', fontSize: RFPercentage(1.8), marginTop: RFPercentage(1) }}>
                    You will receive a confirmation Email click to verify.
                </Text>
            </View>

            {/* Bottom Image */}
            <View style={{ backgroundColor: Colors.black, borderTopLeftRadius: RFPercentage(5), borderTopRightRadius: RFPercentage(5), position: 'absolute', bottom: 0, width: '100%', height: RFPercentage(55) }}>
                <Image style={{ opacity: 0.7, borderTopLeftRadius: RFPercentage(5), borderTopRightRadius: RFPercentage(5), position: 'absolute', bottom: 0, width: '100%', height: RFPercentage(55) }} source={require('../../assets/images/bottom.png')} />
                {/* Botom Buttons */}
                <View style={{ width: "100%", position: 'absolute', bottom: RFPercentage(10) }}>
                    <MyAppButton
                        title="Signup"
                        padding={RFPercentage(1.8)}
                        bold={true}
                        onPress={() => props.navigation.navigate("LoginScreen2")}
                        backgroundColor={Colors.white}
                        color={Colors.black}
                        width={"85%"}
                    />
                </View>
            </View>

        </Screen>
    );
}

export default SignupScreen;