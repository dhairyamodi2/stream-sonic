import { ScrollView, Text, View } from "react-native"
import React from "react"
import { gradient_scheme } from "../constants";
import {LinearGradient} from 'expo-linear-gradient'
import Header from "../ui/Header";
import ArtistAvatar from "../modules/artists/ArtistAvatar";
import Artists from "../modules/artists/Artists";
import Albums from "../modules/albums/Albums";
import Tracks from "../modules/tracks/Tracks";

const Home = function () {
    return (
        <LinearGradient colors={gradient_scheme} style={{flex: 1, padding: 10}}>
            <Header />

            <ScrollView style={{flex: 0.9, paddingLeft: 10, paddingTop: 10, paddingBottom: 50}}>
               <Artists></Artists>
               <Albums></Albums>
               <Tracks></Tracks>

               <View style={{marginTop: 100}}></View>
            </ScrollView>
           

            <Text style={{color: 'tomato', backgroundColor: 'blue'}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis aut hic nemo illo quisquam sit exercitatinsk
            </Text>
        </LinearGradient>
    )
}

export default Home;