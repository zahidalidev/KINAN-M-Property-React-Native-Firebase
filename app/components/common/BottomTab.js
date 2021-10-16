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
                <TouchableOpacity >
                    <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require('../../../assets/images/home.png')} />
                </TouchableOpacity>
                <TouchableOpacity  >
                    <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require('../../../assets/images/disc.png')} />
                </TouchableOpacity>
                <TouchableOpacity  >
                    <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require('../../../assets/images/search.png')} />
                </TouchableOpacity>
                <TouchableOpacity  >
                    <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require('../../../assets/images/acc.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BottomTab;