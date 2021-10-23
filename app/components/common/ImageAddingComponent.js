import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';

//config
import Colors from '../../config/Colors';

function ImageAddingComponent({ onUploadImage1 = () => null, onUploadImage2 = () => null, onUploadImage3 = () => null, shelfMainPhoto, shelfPhotoGall2, shelfPhotoGall3 }) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            {/* Image adding Box */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(2.5), width: "90%", height: RFPercentage(20), backgroundColor: Colors.white, borderRadius: RFPercentage(3) }}>
                <View style={{ position: 'absolute', top: RFPercentage(2), left: RFPercentage(2) }}>
                    <Text style={{ color: '#3E4462', fontSize: RFPercentage(2.7) }}>Upload Photos</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: RFPercentage(3) }}>
                    {/* Box1 */}
                    <TouchableOpacity activeOpacity={0.8} onPress={() => onUploadImage1()} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(12), height: RFPercentage(11), marginTop: RFPercentage(1) }}>
                        {shelfMainPhoto ? <Image resizeMode="cover" source={shelfMainPhoto} style={{ width: RFPercentage(13), height: RFPercentage(12), borderRadius: RFPercentage(2) }} />
                            :
                            <View style={{ width: RFPercentage(7.6), height: RFPercentage(7.6), justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(10), backgroundColor: '#E3E3E3' }}>
                                <Entypo name="plus" size={RFPercentage(4.5)} color="#8C8C8C" />
                            </View>
                        }
                    </TouchableOpacity>
                    {/* Box2 */}
                    <TouchableOpacity activeOpacity={0.8} onPress={() => onUploadImage2()} style={{ marginLeft: RFPercentage(2), justifyContent: 'center', alignItems: 'center', width: RFPercentage(12), height: RFPercentage(11), marginTop: RFPercentage(1) }}>
                        {shelfPhotoGall2 ? <Image resizeMode="cover" source={shelfPhotoGall2} style={{ width: RFPercentage(13), height: RFPercentage(12), borderRadius: RFPercentage(2) }} />
                            : <View style={{ width: RFPercentage(7.6), height: RFPercentage(7.6), justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(10), backgroundColor: '#E3E3E3' }}>
                                <Entypo name="plus" size={RFPercentage(4.5)} color="#8C8C8C" />
                            </View>
                        }
                    </TouchableOpacity>
                    {/* Box3 */}
                    <TouchableOpacity activeOpacity={0.8} onPress={() => onUploadImage3()} style={{ marginLeft: RFPercentage(2), justifyContent: 'center', alignItems: 'center', width: RFPercentage(12), height: RFPercentage(11), marginTop: RFPercentage(1) }}>
                        {shelfPhotoGall3 ? <Image resizeMode="cover" source={shelfPhotoGall3} style={{ width: RFPercentage(13), height: RFPercentage(12), borderRadius: RFPercentage(2) }} />
                            : <View style={{ width: RFPercentage(7.6), height: RFPercentage(7.6), justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(10), backgroundColor: '#E3E3E3' }}>
                                <Entypo name="plus" size={RFPercentage(4.5)} color="#8C8C8C" />
                            </View>
                        }
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}

export default ImageAddingComponent;