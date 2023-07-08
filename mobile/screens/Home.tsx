import React, { useEffect } from "react"
import { Text, ToastAndroid, View } from "react-native"
import * as SecureStore from 'expo-secure-store'
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamsList } from "../Navigation"
import { useNavigation } from "@react-navigation/native"


type Props = NativeStackNavigationProp<RootStackParamsList>
export const Home = function () {
    const navigate = useNavigation<Props>()
    useEffect(() => {
        console.log('home rendered')
        SecureStore.getItemAsync("token").then((item) => {
            console.log(item)
            fetch("https://streamsonic.loca.lt/user/me", {
                headers: {
                    "Content-type" : "application/json",
                    "authorization" : `Bearer ${item}`
                }
            }).then((res) => {
                return res.json()
            }).then((data) => {
                console.log(data.data.completedProfile);
                if(data && data.success == true) {
                    ToastAndroid.show("User authenticated", 1000)
                    if (data.data.completedProfile == false) {
                        console.log('pri')
                        navigate.navigate("Onboarding");
                    }
                }
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}