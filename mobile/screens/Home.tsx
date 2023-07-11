import { ScrollView, Text, View } from "react-native"
import React from "react"
import { gradient_scheme } from "../constants";
import {LinearGradient} from 'expo-linear-gradient'
import Header from "../ui/Header";
import ArtistAvatar from "../modules/artists/ArtistAvatar";
import Artists from "../modules/artists/Artists";
import Albums from "../modules/albums/Albums";
import Tracks from "../modules/tracks/Tracks";
import TrackPlayerMini from "../modules/tracks/TrackPlayerMini";

const Home = function () {
    return (
        <LinearGradient colors={gradient_scheme} style={{flex: 1, padding: 10}}>
            <Header />

            <View style={{flex: 0.8}}>
            <ScrollView style={{paddingLeft: 10, paddingTop: 10, paddingBottom: 50}}>
               <Artists></Artists>
               <Albums></Albums>
               <Tracks></Tracks>

               <View style={{marginBottom: 100}}></View>
            </ScrollView>
            </View>
            <View style={{flex: 0.1}}>
            <TrackPlayerMini />
            </View>
        </LinearGradient>
    )
}

export default Home;