import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
//config
import Colors from '../config/Colors';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';

function PostNewsScreen(props) {
    const [inputField, SetInputField] = useState([
        {
            placeholder: "Home Address and Location",
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
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.lightestBrownish }}>
            {/* Nav */}
            <View style={{ marginTop: RFPercentage(3.5), width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {/* Back Icon */}
                <TouchableOpacity style={{ position: 'absolute', left: RFPercentage(1) }} >
                    <Ionicons name="arrow-back-outline" style={{ fontSize: RFPercentage(3.8) }} color={Colors.white} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: RFPercentage(2.9), color: Colors.white }}>
                    Post News
                </Text>
            </View>

            {/* White Box 1 */}
            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: RFPercentage(5), backgroundColor: Colors.white, width: '90%', height: RFPercentage(20), borderRadius: RFPercentage(3) }} >
                <Text style={{ marginTop: RFPercentage(2), marginLeft: RFPercentage(3), color: '#3E4462', fontSize: RFPercentage(3) }}>
                    Title
                </Text>
                {/* Input field */}
                <View style={{ marginTop: RFPercentage(1), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Input Fields */}
                    {inputField.map((item, i) => (
                        <View key={i} style={{ marginTop: RFPercentage(2) }} >
                            <InputField
                                placeholder={item.placeholder}
                                backgroundColor={Colors.inputFieldGrey}
                                borderWidth={0.3}
                                borderColor={Colors.inputFieldGrey}
                                borderRadius={RFPercentage(1)}
                                fontSize={RFPercentage(2)}
                                handleFeild={(text) => handleChange(text, i)}
                                value={item.value}
                                width={"95%"}
                            />
                        </View>
                    ))}
                </View>
            </View>

            {/* White Box 2 */}
            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: RFPercentage(5), backgroundColor: Colors.white, width: '90%', height: RFPercentage(25), borderRadius: RFPercentage(3) }} >
                <Text style={{ marginTop: RFPercentage(2), marginLeft: RFPercentage(3), color: '#3E4462', fontSize: RFPercentage(3) }}>
                    Detail
                </Text>
                {/* Input field */}
                <View style={{ marginTop: RFPercentage(1), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Input Fields */}
                    {secondInputField.map((item, i) => (
                        <View key={i} style={{ marginTop: RFPercentage(2) }} >
                            <InputField
                                placeholder={item.placeholder}
                                backgroundColor={Colors.inputFieldGrey}
                                height={RFPercentage(12)}
                                borderWidth={0.3}
                                borderColor={Colors.inputFieldGrey}
                                borderRadius={RFPercentage(1.2)}
                                fontSize={RFPercentage(2)}
                                handleFeild={(text) => handleChange2(text, i)}
                                value={item.value}
                                width={"95%"}
                            />
                        </View>
                    ))}
                </View>
            </View>

            {/* Bottom Button */}
            <View style={{ width: '100%', position: 'absolute', bottom: RFPercentage(4) }}>
                <MyAppButton
                    title="Post News"
                    padding={RFPercentage(1.8)}
                    bold={true}
                    // onPress={() => props.navigation.navigate("LoginScreen2")}
                    backgroundColor={Colors.lightPink}
                    color={Colors.lightBlack}
                    width={"80%"}
                />
            </View>
        </Screen>
    );
}

export default PostNewsScreen;