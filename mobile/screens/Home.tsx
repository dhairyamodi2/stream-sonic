import { Modal, ScrollView, Text, View } from "react-native"
import React from "react"
import { color_scheme, gradient_scheme } from "../constants";
import { LinearGradient } from 'expo-linear-gradient'
import Header from "../ui/Header";
import ArtistAvatar from "../modules/artists/ArtistAvatar";
import Artists from "../modules/artists/Artists";
import Albums from "../modules/albums/Albums";
import Tracks from "../modules/tracks/Tracks";
import TrackPlayerMini from "../modules/tracks/TrackPlayerMini";
import { useSelector } from "react-redux";
import { PlayState, TrackState } from "common/src/modules/tracks/tracks.types";
import { State } from "common/src/store";
import { useIsFocused } from "@react-navigation/native";
import { AlbumState } from "common/src/modules/albums/albums.types";
import { ArtistsState } from "common/src/modules/artists/artists.types";
import { ActivityIndicator, Portal } from "react-native-paper";

const Home = function () {
    const { track } = useSelector<State, PlayState>(state => state.playback)
    const albums = useSelector<State, AlbumState>(state => state.albums)
    const tracks = useSelector<State, TrackState>(state => state.tracks)
    const artists = useSelector<State, ArtistsState>(state => state.artists)
    const focus = useIsFocused();
    if (albums.isLoading || artists.isLoading || tracks.isLoading) {
        return (
            <LinearGradient colors={gradient_scheme} style={{ flex: 1, padding: 10 }}>
                <Header />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator color={color_scheme} size={50} />
                </View>
            </LinearGradient>
        )
    }
    return (
        <LinearGradient colors={gradient_scheme} style={{ flex: 1, padding: 10 }}>
            <Header />
            <View style={{ flex: 1 }}>
                <ScrollView style={{ paddingLeft: 10, paddingTop: 10, paddingBottom: 50 }}>
                    <Artists></Artists>
                    <Albums></Albums>
                    <Tracks></Tracks>

                    <View style={{ marginBottom: 100 }}></View>
                </ScrollView>

            </View>
            {focus && <View style={{ height: track ? 70 : 0 }}>
                <TrackPlayerMini />
            </View>}

        </LinearGradient>
    )
}

export default Home;