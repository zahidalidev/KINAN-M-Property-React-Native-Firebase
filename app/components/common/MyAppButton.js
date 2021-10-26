import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

function MyAppButton({
    title,
    onPress = () => { },
    bold = true,
    backgroundColor,
    fontFamily = null,
    borderradius = RFPercentage(2.5),
    padding = RFPercentage(2),
    width = "100%",
    color,
    borderWidth = null,
    borderColor = null,
}) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: borderWidth,
                width: width,
                borderRadius: borderradius,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                padding: padding,
            }}
        >
            <Text
                style={{
                    fontFamily: fontFamily,
                    fontSize: RFPercentage(2.2),
                    color: color,
                    fontWeight: bold ? "bold" : null,
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default MyAppButton;