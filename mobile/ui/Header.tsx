import { Feather, FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";



const Header = function () {
    return (
        <View style={{flex: 0.1}}>
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
            <FontAwesome5 name="history" size={24} color='white' />
            <Feather name="settings" size={24} color="white" />
            </View>
        </View>
        </View>
    )
}


export default Header;