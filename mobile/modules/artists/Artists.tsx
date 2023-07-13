import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import ArtistAvatar from "./ArtistAvatar";
import Header from "../../ui/Header";
import Heading from "../../ui/Heading";
import { Text } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { State } from "common/src/store";
import { ArtistsState } from "common/src/modules/artists/artists.types";



const Artists = function () {
    const {topArtists} = useSelector<State, ArtistsState>(state => state.artists)
    return (
        <View style={{marginTop: 15}}>
            {/* <View style={{flexDirection: 'row'}}> */}
            <Heading text="Top Artists" icon={<Entypo name="chevron-small-right" size={24} color="black" />} route="Artists"/>
        
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                
             {topArtists.map((artist) => {
                return <ArtistAvatar artist={artist} key={artist.user_id} />
             })}
            </ScrollView>
            
        </View>
    )
}


export default Artists