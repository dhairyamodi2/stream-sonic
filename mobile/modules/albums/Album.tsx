import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { AlbumsWithTracksAndUser } from 'api/src/types/Prisma'
import { LinearGradient } from 'expo-linear-gradient'
import { gradient_scheme } from '../../constants'
import { Avatar } from 'react-native-paper'
import TrackInfo from '../tracks/TrackInfo'

const AlbumDetail: React.FC<{ album: AlbumsWithTracksAndUser }> = ({ album }) => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient style={{ flex: 0.5 }} colors={["#565656","#262424"]} >

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={{ uri: album.album_image }} style={{
                        width: 140,
                        height: 140
                    }} />
                </View>
                <View style={{marginLeft: 15}}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', letterSpacing: 0.8}}>{album.album_name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10,}}>
                    <Avatar.Image source={{uri: album.user.imageUri!}} size={20}></Avatar.Image>
                    <Text style={{color: 'white', fontSize: 10, letterSpacing: 1, marginLeft: 3}}>{album.user.name}</Text></View>
                    <Text style={{fontSize: 8, color: 'white', marginTop: 10, letterSpacing: 1, marginBottom: 2}}>2018 | 8 songs</Text>
                </View>
                
            </LinearGradient>
            <LinearGradient colors={gradient_scheme} style={{ flex: 0.5, padding: 10, paddingTop: 20 }}>
                <ScrollView>
                {album.tracks.map((track) => {
                    return <TrackInfo track={track} key={track.track_id}/>
                })}
                </ScrollView>
            </LinearGradient>

        </View>
    )
}

export default AlbumDetail