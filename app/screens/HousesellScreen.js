import React, { useState, useRef } from 'react';
import { ImageBackground, Image, TouchableOpacity, View, Text, Modal, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

import * as ImagePicker from 'expo-image-picker';
import { Entypo } from "@expo/vector-icons";

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';
import BottomTab from '../components/common/BottomTab';
import ImageAddingComponent from '../components/common/ImageAddingComponent';


//config
import Colors from '../config/Colors';

const { height } = Dimensions.get("window");


function HousesellScreen(props) {



    const [pickerModel, setPickerModel] = useState(false);
    const [currentImageBox, setcurrentImageBox] = useState(null);

    const [shelfMainPhoto, setshelfMainPhoto] = useState(false)
    const [shelfPhotoGall1, setshelfPhotoGall1] = useState(false)
    const [shelfPhotoGall2, setshelfPhotoGall2] = useState(false)
    const [shelfPhotoGall3, setshelfPhotoGall3] = useState(false)




    const uploadImages = async (imageSelecor) => {
        try {
            await ImagePicker.requestMediaLibraryPermissionsAsync();
            await ImagePicker.requestCameraPermissionsAsync()
            await ImagePicker.getCameraPermissionsAsync()
            let permissionResult = await ImagePicker.getMediaLibraryPermissionsAsync();

            if (permissionResult.granted === false) {
                alert("Permission to access camera roll is required!");
                return;
            }
            let pickerResult;
            if (imageSelecor === "camera") {
                pickerResult = await ImagePicker.launchCameraAsync();
            }
            else if (imageSelecor === "gallery") {
                pickerResult = await ImagePicker.launchImageLibraryAsync();
            }

            if (currentImageBox === 1) {
                setshelfMainPhoto(pickerResult)
                setPickerModel(false)
            }
            else if (currentImageBox === 2) {
                setshelfPhotoGall1(pickerResult)
                setPickerModel(false)
            }
            else if (currentImageBox === 3) {
                console.log("here")
                setshelfPhotoGall2(pickerResult)
                setPickerModel(false)
            }
            else if (currentImageBox === 4) {
                setshelfPhotoGall3(pickerResult)
                setPickerModel(false)
            }

        } catch (error) {

        }
    }






    const [inputField, SetInputField] = useState([
        {
            placeholder: "Home Address and Location",
            title: 'Title',
            height: RFPercentage(6.9),
            value: "",
        },
        {
            placeholder: "Type your message",
            title: 'Details',
            height: RFPercentage(12),
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
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.secondary }}>
            {/* Nav Bar with menue */}
            <View style={{ marginTop: RFPercentage(3.5), width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {/* Back Icon */}
                <TouchableOpacity style={{ position: 'absolute', left: RFPercentage(1) }} >
                    <Ionicons name="arrow-back-outline" style={{ fontSize: RFPercentage(3.8) }} color={Colors.black} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: RFPercentage(2.7), color: Colors.black }}>
                    Sell House
                </Text>
                {/* Menue Icon */}
                <TouchableOpacity style={{ position: 'absolute', right: RFPercentage(0) }}>
                    <Image source={require('../../assets/images/menu.png')} />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ backgroundColor: Colors.secondary, flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(1) }}>
                    {/* White Boxes */}
                    {inputField.map((item, i) => (
                        <View key={i} style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: i === 0 ? RFPercentage(5) : RFPercentage(2.5), backgroundColor: Colors.white, width: '90%', height: i === 0 ? RFPercentage(19) : RFPercentage(24), borderRadius: RFPercentage(3) }} >
                            <View style={{ marginTop: RFPercentage(1), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <View style={{ marginTop: RFPercentage(2) }} >
                                    <Text style={{ marginBottom: RFPercentage(2), color: '#3E4462', fontSize: RFPercentage(3) }}>
                                        {item.title}
                                    </Text>
                                    <InputField
                                        placeholder={item.placeholder}
                                        backgroundColor={Colors.inputFieldGrey}
                                        borderWidth={0.3}
                                        height={item.height}
                                        borderColor={Colors.inputFieldGrey}
                                        borderRadius={RFPercentage(1)}
                                        fontSize={RFPercentage(2)}
                                        handleFeild={(text) => handleChange(text, i)}
                                        value={item.value}
                                        width={"95%"}
                                    />
                                </View>
                            </View>
                        </View>
                    ))}

                    {/* Image adding box */}
                    <ImageAddingComponent
                        onUploadImage1={() => {
                            setcurrentImageBox(2)
                            setPickerModel(true)
                        }}
                        onUploadImage2={() => {
                            setcurrentImageBox(3)
                            setPickerModel(true)
                        }}
                        onUploadImage3={() => {
                            setcurrentImageBox(4)
                            setPickerModel(true)
                        }}
                        shelfMainPhoto={shelfPhotoGall1}
                        shelfPhotoGall2={shelfPhotoGall2}
                        shelfPhotoGall3={shelfPhotoGall3}
                        threeBoxes={true} />

                    {/* Bottom Button */}
                    <View style={{ width: '100%', marginTop: RFPercentage(10), marginBottom: RFPercentage(10) }}>
                        <MyAppButton
                            title="Post News"
                            padding={RFPercentage(1.8)}
                            bold={true}
                            // onPress={() => props.navigation.navigate("LoginScreen2")}
                            backgroundColor={Colors.lightestBrownish}
                            color={Colors.white}
                            width={"80%"}
                        />
                    </View>
                </View>
            </ScrollView>

            {/* Bottom tab */}
            <BottomTab props={props} />

            {/* Model */}
            <Modal visible={pickerModel} transparent={true} >
                <View style={{ justifyContent: "flex-end", flex: 1, height: height, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)" }} >
                    <View style={{ alignItems: "center", borderTopLeftRadius: RFPercentage(3), borderTopRightRadius: RFPercentage(3), backgroundColor: Colors.white, width: "100%", height: RFPercentage(25) }} >
                        <View style={{ width: "90%", marginTop: RFPercentage(1.5) }} >
                            <TouchableOpacity onPress={() => setPickerModel(false)} >
                                <Entypo size={RFPercentage(3)} name="cross" color={Colors.grey} />
                            </TouchableOpacity>
                            <Text style={{ marginTop: RFPercentage(1), marginLeft: RFPercentage(1), fontSize: RFPercentage(2), fontWeight: "bold" }} >Select Photo</Text>

                            <TouchableOpacity onPress={() => uploadImages("camera")} style={{ backgroundColor: "#F7F7F7", marginTop: RFPercentage(1), borderRadius: RFPercentage(1), justifyContent: "center", width: "96%", marginLeft: "2%", height: RFPercentage(5.5), borderWidth: 1, borderColor: "#3A3384" }} >
                                <Text style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(2.2) }} >Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => uploadImages("gallery")} style={{ backgroundColor: "#F7F7F7", marginTop: RFPercentage(1), borderRadius: RFPercentage(1), justifyContent: "center", width: "96%", marginLeft: "2%", height: RFPercentage(5.5), borderWidth: 0, borderColor: "#3A3384" }} >
                                <Text style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(2.2) }} >Photo Gallery</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </Screen>
    );
}

export default HousesellScreen;