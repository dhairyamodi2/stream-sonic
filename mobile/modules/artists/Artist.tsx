import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Avatar } from 'react-native-paper'
import { gradient_scheme } from '../../constants'
import TrackInfo from '../tracks/TrackInfo'
import { ArtistWithAlbumsAndTracks } from 'api/src/types/Prisma'
import CustomText from '../../ui/CustomText'

const ArtistDetail: React.FC<{ artist: ArtistWithAlbumsAndTracks }> = ({ artist }) => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient style={{ flex: 0.35 }} colors={["#565656", "#262424"]} >

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Avatar.Image size={130} source={{ uri: artist.imageUri ? artist.imageUri : 'https://i.scdn.co/image/ab6761610000517423c885de4c81852c917608ac' }} />
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', letterSpacing: 0.8 }}>{artist.name}</Text>
                </View>
                <View style={{ marginLeft: 15 }}>

                    {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, }}>
                        <Avatar.Image source={{ uri: album.user.imageUri! }} size={20}></Avatar.Image>
                        <Text style={{ color: 'white', fontSize: 10, letterSpacing: 1, marginLeft: 3 }}>{album.user.name}</Text></View>
                    <Text style={{ fontSize: 8, color: 'white', marginTop: 10, letterSpacing: 1, marginBottom: 2 }}>2018 | 8 songs</Text> */}
                </View>

            </LinearGradient>
            <LinearGradient colors={gradient_scheme} style={{ flex: 0.65, padding: 20 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Pressable style={{padding: 15, backgroundColor:'#FFFFFF12', borderRadius: 7}}>
                        <Text style={{color: 'white', fontSize: 15, fontFamily: 'BalsamiqSans_400Regular'}}>Songs</Text>
                    </Pressable>

                    <Pressable style={{padding: 15,  backgroundColor:'#FFFFFF12', borderRadius: 7}}>
                    <Text style={{color: 'white', fontSize: 15, fontFamily: 'BalsamiqSans_400Regular'}}>Albums</Text>
                    </Pressable>
                </View>
                <ScrollView>
                    {artist.tracks.map((track) => {
                        return <TrackInfo track={track} key={track.track_id}/>
                    })}
                </ScrollView>
            </LinearGradient>

        </View>
    )
}

export default ArtistDetail