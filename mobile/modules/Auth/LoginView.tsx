import { Image, Pressable, Text, ToastAndroid, TouchableOpacity, View } from "react-native"
import React, { useDeferredValue, useEffect, useState } from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../Navigation";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'; 
import * as WebBrowser from 'expo-web-browser';
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "../../envConstants";
import * as Linking from "expo-linking";
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from "react-redux";
import {setVisited} from 'common/src/modules/auth/auth.actions'

type Props = NativeStackNavigationProp<RootStackParamsList>
export const LoginView = function () {
    const navigation = useNavigation<Props>();
    const clientId = GOOGLE_CLIENT_ID
    const redirectUri = GOOGLE_REDIRECT_URI

    
    const [result, setResult] = useState<WebBrowser.WebBrowserAuthSessionResult>();
    async function handleGoogleSignIn() {
        console.log(clientId);
        console.log(redirectUri)
        const url =  Linking.createURL("app")
        console.log(url);

        const result = await WebBrowser.openAuthSessionAsync(`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&access_type=offline&state=1234_purpleGoogle&prompt=consent`, url);

        setResult(result);
        console.log('got the result')
    }

    const dispatch = useDispatch();

    useEffect(() => {
        if(result && result.type === 'success') {
            const params = Linking.parse(result.url);
            if(params.queryParams && params.queryParams.token) {
                console.log(params.queryParams.token)
                SecureStore.setItemAsync("token", params.queryParams.token as string).then((data)=> {
                    dispatch(setVisited() as any);
                    console.log('set visited to false')
                    navigation.navigate('Onboarding');
                }).catch((err) => {
                    ToastAndroid.show(err, 1000);
                })
                // navigation.navigate('Home')
            }
        }
        console.log('result changed');
        console.log(result)
    }, [result])
    return (
        <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../assets/logo-transparent-png.png')} style={{width: 200, height: 200}}></Image>
            <View style={{flex: 0.5}}></View>
            <Pressable style={{borderColor: 'grey', borderWidth: 1, padding: 15, borderRadius: 30, flexDirection: 'row', alignItems: 'center'}} onPress={handleGoogleSignIn}>
            <AntDesign name="google" size={22} color={'white'} />
                <Text style={{
                    color: 'white',
                    fontSize: 15,
                    letterSpacing: 0.7,
                    marginLeft: 10,
                    marginRight: 7,
                    fontWeight: 'bold',
                }}>Yet to be implemented</Text>
            </Pressable>

            <Pressable style={{borderColor: 'grey', borderWidth: 1, padding: 15, borderRadius: 30, flexDirection: 'row', alignItems: 'center', marginTop: 20}} onPress={() => {
                fetch('https://streamsonic.loca.lt/').then((res) => res.json()).then((data) => {
                    console.log(data)
                }).catch((err) => {
                    console.log(err)
                })
            }}>
            <AntDesign name="twitter" size={22} color={'white'} />
                <Text style={{
                    color: 'white',
                    fontSize: 15,
                    letterSpacing: 0.7,
                    marginLeft: 10,
                    marginRight: 7,
                    fontWeight: 'bold',
                }}>Yet to be implemented</Text>
            </Pressable>
            
        </View>
    )
}