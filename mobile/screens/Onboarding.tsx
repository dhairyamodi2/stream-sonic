import { Text, TextInput, ToastAndroid, View } from "react-native"
import React, { useEffect, useState } from "react"
import DatePicker from '@react-native-community/datetimepicker'
import { backendUri } from "../envConstants";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as SecureStore from 'expo-secure-store'
import { useDispatch, useSelector } from "react-redux";
import { onboarding, setVisited } from "common/src/modules/auth/auth.actions";
import { State } from "common/src/store";
import { AuthState } from "common/src/modules/auth/auth.types";

type Props = NativeStackNavigationProp<RootStackParamsList, 'Onboarding'>
export const Onboarding = function () {
    const navigation = useNavigation<Props>();
    const [date, setDate] = useState<Date>();
    const [picked, setPicked] = useState(false);

    const {isLoading, user, message} = useSelector<State, AuthState>(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoading === false) {
            if(user && user?.completedProfile === true) {
                navigation.replace('Root');
            }
            else {
                ToastAndroid.show(message, 1000);
            }
        }
    }, [isLoading, user,message])
    useEffect(()=> {
        async function wrapper() {
            if (date != undefined && picked == false) {
                const token = await SecureStore.getItemAsync("token");
                if(token) {
                    console.log(date);
                    dispatch(onboarding({birthDate: date, token: token}) as any)
                }
                
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
