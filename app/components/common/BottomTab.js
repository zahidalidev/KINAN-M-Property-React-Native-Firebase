import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

//config
import Colors from '../../config/Colors';

function BottomTab({ props }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', justifyContent: 'center', bottom: 0, width: "100%", height: RFPercentage(7), backgroundColor: Colors.white }}>
            <View style={{ width: "80%", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', }} >
                <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")} >
                    <Image style={{ width: RFPercentage(3.7), height: RFPercentage(3.7) }} source={require('../../../assets/images/home.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate("DiscoverScreen")}   >
                    <Image style={{ width: RFPercentage(3.7), height: RFPercentage(3.7) }} source={require('../../../assets/images/disc.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate("SearchScreen")}  >
                    <Image style={{ width: RFPercentage(3.7), height: RFPercentage(3.7) }} source={require('../../../assets/images/search.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate("AccountScreen")} >
                    <Image style={{ width: RFPercentage(3.7), height: RFPercentage(3.7) }} source={require('../../../assets/images/acc.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BottomTab;