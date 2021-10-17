import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons, Feather } from '@expo/vector-icons';



//config
import Colors from "../../config/Colors";

function InputField({
    onTouchStart = () => { },
    onTouchEnd = () => { },
    placeholder,
    handleFeild,
    borderColor = Colors.white,
    borderWidth = RFPercentage(0),
    fontFamily = null,
    placeholderColor = "#B4B6B8",
    borderRadius = RFPercentage(1),
    backgroundColor = Colors.white,
    keyboardType = "default",
    textCenter = "left",
    fontSize = RFPercentage(2.5),
    editIcon = false,
    dropdownIcon = false,
    width,
    value,
    height = RFPercentage(6.9),
    secure = false,
    handleClear = false,
    leftIconName = '',
    autoFocus = false,
    searchMarginLeft = null,
    color = "black",
    ...otherProps
}) {
    const [eyeIcon, setEyeIcon] = useState(false);

    return (
        <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: backgroundColor, borderColor: borderColor, borderWidth: borderWidth, width: width, height: height, borderRadius: borderRadius, marginVertical: RFPercentage(0.7), }} >
            {leftIconName ? (
                <TouchableOpacity onPress={() => handleFeild('')} style={{ alignItems: 'center', justifyContent: 'center', position: "absolute", right: RFPercentage(1), backgroundColor: '#939C84', width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(1.2) }}>
                    <Feather
                        color={Colors.white}
                        size={RFPercentage(2.8)}
                        // style={{ right: RFPercentage(1) }}
                        name={leftIconName}
                    />
                </TouchableOpacity>
            ) : null}

            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                onChangeText={(text) => handleFeild(text)}
                onResponderStart={onTouchStart}
                onEndEditing={onTouchEnd}
                value={value}
                autoFocus={autoFocus}
                keyboardType={keyboardType}
                secureTextEntry={secure && !eyeIcon}
                textAlign={textCenter}
                style={{ color: color, alignSelf: "center", fontFamily: fontFamily, fontSize: fontSize, width: leftIconName ? "85%" : "90%" }}
                {...otherProps}
            ></TextInput>

            {handleClear && value.length > 0 ? (
                <TouchableOpacity onPress={() => handleFeild('')} style={{ position: "absolute", right: RFPercentage(1), }}>
                    <MaterialCommunityIcons
                        color={Colors.inputFieldBorder}
                        style={{ right: RFPercentage(1) }}
                        size={RFPercentage(3)}
                        name="close"
                    />
                </TouchableOpacity>
            ) : null}

            {editIcon ? (
                <TouchableOpacity onPress={() => handleFeild('')} style={{ position: "absolute", right: RFPercentage(1), top: RFPercentage(1.4) }}>
                    <MaterialIcons
                        color={Colors.inputFieldBorder}
                        style={{ right: RFPercentage(1) }}
                        size={RFPercentage(1.5)}
                        name="edit"
                    />
                </TouchableOpacity>
            ) : null}

            {dropdownIcon ? (
                <TouchableOpacity style={{ position: "absolute", right: RFPercentage(2) }}>
                    <Ionicons
                        color={Colors.circle}
                        style={{ right: RFPercentage(1) }}
                        size={RFPercentage(4)}
                        name="caret-down"
                    />
                </TouchableOpacity>
            ) : null}

            {secure ? (
                <TouchableOpacity onPress={() => setEyeIcon(!eyeIcon)} style={{ position: "absolute", right: RFPercentage(1), }}>
                    <MaterialCommunityIcons
                        color={eyeIcon ? Colors.black : Colors.inputFieldBorder}
                        style={{ right: RFPercentage(1) }}
                        size={RFPercentage(3)}
                        name={eyeIcon ? "eye-outline" : "eye-off-outline"}
                    />
                </TouchableOpacity>
            ) : null}
        </View>
    );
}

export default InputField;