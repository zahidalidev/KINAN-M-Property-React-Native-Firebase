import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
//config
import Colors from '../config/Colors';
import MyAppButton from './../components/common/MyAppButton';
import BottomTab from '../components/common/BottomTab';

function AccountScreen(props) {

    const cartData = [
        {
            imageSource: require('../../assets/images/acc2.png'),
            mainTitle: 'My Account',
            subTitle: 'Edit you details, account settings'
        },
        {
            imageSource: require('../../assets/images/his.png'),
            mainTitle: 'Home History',
            subTitle: 'View history'
        },
        {
            imageSource: require('../../assets/images/location.png'),
            mainTitle: 'Area History',
            subTitle: 'View  your area history'
        },
        {
            imageSource: require('../../assets/images/heart.png'),
            mainTitle: 'My Adds',
            subTitle: 'See the Home you have added for sale'
        },

    ]
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.secondary }}>
            {/*Avatar */}
            <TouchableOpacity>
                <Image style={{ marginTop: RFPercentage(3) }} source={require('../../assets/images/avatar2.png')} />
            </TouchableOpacity>
            {/* Name */}
            <Text style={{ color: Colors.black, marginTop: RFPercentage(2), fontSize: RFPercentage(3.1), fontWeight: 'bold' }}>Jean</Text>
            {/* cart */}
            <ScrollView style={{ backgroundColor: Colors.secondary, flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(1) }}>
                    {cartData.map((item, i) => (
                        <View key={i} style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginTop: i === 0 ? RFPercentage(4) : RFPercentage(3.2), width: '85%', height: RFPercentage(16), borderRadius: RFPercentage(3), backgroundColor: Colors.pink }}>
                            <TouchableOpacity>
                                <Image style={{ marginLeft: RFPercentage(3) }} source={item.imageSource} />
                            </TouchableOpacity>
                            <View style={{ marginLeft: RFPercentage(2.5) }}>
                                <Text style={{ fontFamily: 'Inter_500Medium', fontSize: RFPercentage(3), color: Colors.lightBrown }}>
                                    {item.mainTitle}
                                </Text>
                                <Text style={{ fontSize: RFPercentage(2), color: Colors.lightBrown }}>
                                    {item.subTitle}
                                </Text>

                            </View>
                        </View>
                    ))}
                </View>
                {/* Bottom Button */}
                <View style={{ marginTop: RFPercentage(5), marginBottom: RFPercentage(15) }}>
                    <MyAppButton
                        title="Sign out"
                        padding={RFPercentage(1.8)}
                        bold={true}
                        // onPress={() => props.navigation.navigate("LoginScreen2")}
                        backgroundColor={Colors.lightestBrownish}
                        color={Colors.white}
                        width={"50%"}
                    />
                </View>
            </ScrollView>
            {/* Bottom tab */}
            <BottomTab />

        </Screen>
    );
}

export default AccountScreen;