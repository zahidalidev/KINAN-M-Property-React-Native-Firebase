import React, { useState } from "react";
import { Platform, Text, TouchableOpacity, View, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../../config/Colors";

function AppDrawer({ navigation }) {
    const items = [
        {
            id: 0,
            label: "Home",
            path: "HomeScreen"
        },
        {
            id: 1,
            label: "Discover",
            path: "DiscoverScreen"
        },
        {
            id: 2,
            label: "Publish Ad",
            path: "HomeScreen"
        },
        {
            id: 3,
            label: "History",
            path: "HomeScreen"
        },
        {
            id: 4,
            label: "Property Records",
            path: "HomeScreen"
        },
        {
            id: 5,
            label: "Help/FAQ",
            path: "HomeScreen"
        },
        {
            id: 6,
            label: "About us",
            path: "HomeScreen"
        },
        {
            id: 7,
            label: "Contact us",
            path: "HomeScreen"
        },
        {
            id: 8,
            label: "News",
            path: "HomeScreen"
        },
    ]

    return (
        <View style={{ flex: 1, width: '100%', position: 'absolute' }}  >

            <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: RFPercentage(10) }}>
                <Image style={{ width: RFPercentage(9), height: RFPercentage(9) }} source={require('../../../assets/images/avatar2.png')} />
                <Text style={{ alignSelf: 'center', marginTop: RFPercentage(1.5), color: Colors.black, fontWeight: 'bold' }} >Jean</Text>
            </View>

            {/* items with devider */}
            {items.map((item, index) => (
                <View key={index} style={{ marginTop: index === 0 ? RFPercentage(6) : RFPercentage(3), justifyContent: 'center', alignItems: "center" }} >
                    <View style={{ alignItems: "center", width: "80%" }} >
                        <TouchableOpacity activeOpacity={0.7} onPress={() => {
                            navigation.navigate(item.path)
                        }} style={{ alignSelf: "flex-start", flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ marginLeft: RFPercentage(1.5), color: Colors.black, fontSize: RFPercentage(2.4), fontWeight: Platform.OS === "android" ? "bold" : "700" }} >{item.label}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}

            <View style={{ width: '100%', backgroundColor: "#F4F4F4", height: RFPercentage(0.1), marginTop: RFPercentage(5) }} />

        </View >
    );
}


export default AppDrawer;