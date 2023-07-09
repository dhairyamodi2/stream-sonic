import React, { useEffect } from "react"
import { Text, ToastAndroid, TouchableOpacity, View } from "react-native"
import * as SecureStore from 'expo-secure-store'
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamsList } from "../Navigation"
import { useNavigation } from "@react-navigation/native"
import { Props } from "../types/types"
import { useDispatch, useSelector } from "react-redux"
import { AuthState } from "common/src/modules/auth/auth.types"
import { State } from "common/src/store"
import { me } from "common/src/modules/auth/auth.actions"


export const Home = function () {

    const navigator = useNavigation<Props>()
    const {visited, isAuthenticated, isLoading, message, user} = useSelector<State, AuthState>(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('from home')
        console.log(visited);
    }, [])
    useEffect(() => {
        if (visited === false) {
            console.log('dispatched');
            SecureStore.getItemAsync("token").then((item) => {
                if(!item) {
                    console.log('item')
                    console.log(item);
                    navigator.navigate('Login');
                    return;
                }
                dispatch(me(item) as any)
            })
        }
    }, [visited])
   
    useEffect(() => {
        if (visited === true && isAuthenticated === false && isLoading === false) {
           navigator.replace('Login');
        }

        if (isAuthenticated === true) {
            if (!user){
                navigator.replace('Login');
                return;
            }
            console.log(user.completedProfile);
            if (user.completedProfile === false && visited === true) {
                navigator.replace('Onboarding');
            }
        }
    }, [isAuthenticated, isLoading, visited])

    return (
        <View>
            <TouchableOpacity onPress={() => {
               SecureStore.setItemAsync("token", "null");
            }}>
            <Text>{isLoading ? "Loading" : "Home"}</Text>
            </TouchableOpacity>
            
        </View>
    )
}