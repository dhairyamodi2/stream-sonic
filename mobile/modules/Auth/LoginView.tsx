import { Image, Pressable, Text, ToastAndroid, TouchableOpacity, View } from "react-native"
import React from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../Navigation";
import { useNavigation } from "@react-navigation/native";
import { MainText } from "../../ui/Text";
import { AntDesign } from '@expo/vector-icons'; 
import * as WebBrowser from 'expo-web-browser';
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "../../envConstants";

type Props = NativeStackNavigationProp<RootStackParamsList, 'Login'>;
export const LoginView = function () {
    const navigation = useNavigation<Props>();
    const clientId = GOOGLE_CLIENT_ID
    const redirectUri = GOOGLE_REDIRECT_URI
    async function handleGoogleSignIn() {
        console.log(clientId);
        console.log(redirectUri)
        const result = await WebBrowser.openAuthSessionAsync(`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&access_type=offline&state=1234_purpleGoogle&prompt=consent`, redirectUri);


        if (result.type === 'success') {
            
        }
    }
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
                }}>Continue With Google</Text>
            </Pressable>

            <Pressable style={{borderColor: 'grey', borderWidth: 1, padding: 15, borderRadius: 30, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <AntDesign name="twitter" size={22} color={'white'} />
                <Text style={{
                    color: 'white',
                    fontSize: 15,
                    letterSpacing: 0.7,
                    marginLeft: 10,
                    marginRight: 7,
                    fontWeight: 'bold',
                }}>Continue With Twitter</Text>
            </Pressable>
            
        </View>
    )
}