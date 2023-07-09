import React, { useEffect } from "react"
import { Text, ToastAndroid, TouchableOpacity, View } from "react-native"
import * as SecureStore from 'expo-secure-store'
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamsList } from "../Navigation"
import { useNavigation } from "@react-navigation/native"
import { Props } from "../types/types"
import { useDispatch, useSelector } from "react-redux"
import { AuthState } from "../modules/Auth/auth.types"
import { State } from "../store"
import { getMe } from "client/src/modules/user/client"


export const Home = function () {

    const navigator = useNavigation<Props>()
    const {visited, isAuthenticated, isLoading, message, user} = useSelector<State, AuthState>(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        if (visited === false) {
            SecureStore.getItemAsync("token").then((item) => {
                if(!item) {
                    navigator.navigate('Login');
                    return;
                }
                dispatch(getMe(item) as any)
            })
        }
    }, [visited])
   
    useEffect(() => {
        if (visited === true && isAuthenticated === false && isLoading === false) {
            navigator.navigate('Login')
        }
    }, [isAuthenticated, isLoading, visited])

    return (
        <View>
            <TouchableOpacity onPress={() => {
                getMe("5").then((data) => {
                    console.log(data);
                })
            }}>
            <Text>{isLoading ? "Loading" : "Home"}</Text>
            </TouchableOpacity>
            
        </View>
    )
}