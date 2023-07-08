import { Text, TextInput, View } from "react-native"
import React, { useEffect, useState } from "react"
import DatePicker from '@react-native-community/datetimepicker'
import { backendUri } from "../envConstants";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as SecureStore from 'expo-secure-store'

type Props = NativeStackNavigationProp<RootStackParamsList, 'Onboarding'>
export const Onboarding = function () {
    const navigation = useNavigation<Props>();
    const [date, setDate] = useState<Date>();
    const [picked, setPicked] = useState(false);
    useEffect(()=> {
        async function wrapper() {
            if (date != undefined && picked == false) {
                const token = await SecureStore.getItemAsync("token");
                fetch(`${backendUri}/user/completeprofile`, {
                    method: "PUT",
                    headers: {
                        'Content-type' : "application/json",
                        'authorization' : `Bearer ${token}`
                    },
                    body: JSON.stringify({birthDate : date})
                }).then((res) => {
                    return res.json()
                }).then((data) => {
                    if (data && data.success === true) {
                        navigation.navigate("Home")
                    }
                })
            }
        }
        wrapper();
    }, [date, picked])
    return (
        <View>
            <Text>Onboarding</Text>
            <DatePicker value={new Date()} textColor="white" themeVariant="dark" display='spinner' onChange={(_, date) => {setDate(date)}}></DatePicker>
        </View>
    )
}
