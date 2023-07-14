import { Feather, FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { popToast } from "../utils/showToast";



const Header = function () {
    return (
        <View style={{ height: 50, }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1,
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 24,
                    fontFamily: 'BalsamiqSans_700Bold',
                    letterSpacing: 1.2,
                    flex: 5
                }}>
                    Good Evening
                </Text>

                <View style={{
                    flexDirection: 'row',
                    flex: 1,
                    alignContent: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Pressable onPress={popToast}>
                        <FontAwesome5 name="history" size={24} color='white' />
                    </Pressable>
                    <Pressable onPress={popToast}>
                    <Feather name="settings" size={24} color="white" />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}


export default Header;