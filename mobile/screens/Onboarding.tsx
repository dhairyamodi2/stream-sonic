import { Text, TextInput, ToastAndroid, View } from "react-native"
import React, { useEffect, useState } from "react"
import DatePicker from '@react-native-community/datetimepicker'
import { backendUri } from "../envConstants";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as SecureStore from 'expo-secure-store'
import { useDispatch, useSelector } from "react-redux";
import { me, onboarding, setVisited } from "common/src/modules/auth/auth.actions";
import { State } from "common/src/store";
import { AuthState } from "common/src/modules/auth/auth.types";
import { LinearGradient } from "expo-linear-gradient";
import { color_scheme, gradient_scheme } from "../constants";
import { ActivityIndicator } from "react-native-paper";

type Props = NativeStackNavigationProp<RootStackParamsList, 'Onboarding'>
export const Onboarding = function () {
    // const navigator = useNavigation<Props>();

    // const {isLoading, user, message, isAuthenticated, visited} = useSelector<State, AuthState>(state => state.auth);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     console.log('from home')
    //     console.log(visited);
    // }, [])
    // useEffect(() => {
    //     if (visited === false) {
    //         console.log('dispatched');
    //         SecureStore.getItemAsync("token").then((item) => {
    //             if(!item) {
    //                 console.log('item')
    //                 console.log(item);
    //                 navigator.navigate('Login');
    //                 return;
    //             }
    //             dispatch(me(item) as any)
    //         })
    //     }
    // }, [visited])
  
    // useEffect(() => {
    //     if (visited === true && isAuthenticated === false && isLoading === false) {
    //        navigator.replace('Login');
    //     }
  
    //     if (isAuthenticated === true) {
    //         if (!user){
    //             navigator.replace('Login');
    //             return;
    //         }
    //         navigator.replace('Root');
    //     }
    //     console.log(isAuthenticated);
    // }, [isAuthenticated, isLoading, visited])
    return (
        <LinearGradient colors={gradient_scheme} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/* <ActivityIndicator color={color_scheme} size={50}/> */}
        </LinearGradient>
    )
}
