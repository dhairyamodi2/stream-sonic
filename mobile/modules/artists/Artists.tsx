import React from "react";
import { ScrollView, View } from "react-native";
import ArtistAvatar from "./ArtistAvatar";
import Header from "../../ui/Header";
import Heading from "../../ui/Heading";
import { Text } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";



const Artists = function () {
    return (
        <View style={{marginTop: 15}}>
            {/* <View style={{flexDirection: 'row'}}> */}
            <Heading text="Top Artists" icon={<Entypo name="chevron-small-right" size={24} color="black" />}/>
        
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ArtistAvatar />
            <ArtistAvatar />
            <ArtistAvatar />
            <ArtistAvatar />

            <ArtistAvatar />
            <ArtistAvatar />
            <ArtistAvatar />
            <ArtistAvatar />
            </ScrollView>
            
        </View>
    )
}


export default Artists