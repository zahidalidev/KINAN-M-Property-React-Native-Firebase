import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
//config
import Colors from '../config/Colors';
import InputField from './../components/common/InputField';

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
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "flex-start", backgroundColor: Colors.secondary }}>
            {/* Nav Container */}
            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: RFPercentage(2) }}>
                <TouchableOpacity style={{ marginLeft: RFPercentage(2) }}>
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
                    <Text style={{ color: '#636E7E', fontSize: RFPercentage(2) }}>
                        Welcome Back
                    </Text>
                </View>
                <TouchableOpacity style={{ position: 'absolute', right: RFPercentage(4) }}>
                    <Image source={require('../../assets/images/menu.png')} />
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: RFPercentage(2), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                {/* Input Fields */}
                {inputField.map((item, i) => (
                    <View key={i} style={{ marginTop: RFPercentage(2) }} >
                        <InputField
                            placeholder={item.placeholder}
                            backgroundColor={Colors.white}
                            borderColor={"#E3E5E5"}
                            borderWidth={0}
                            leftIconName={"search"}
                            borderRadius={RFPercentage(1)}
                            fontSize={RFPercentage(2)}
                            handleFeild={(text) => handleChange(text, i)}
                            value={item.value}
                            width={"95%"}
                        />
                    </View>
                ))}
            </View>

        </Screen>
    );
}

export default HomeScreen;