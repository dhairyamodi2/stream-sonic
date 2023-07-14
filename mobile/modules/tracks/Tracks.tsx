import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Heading from '../../ui/Heading'
import AlbumsAvatar from '../albums/AlbumsAvatar'
import TrackAvatar from './TrackAvatar'
import { Entypo } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { State } from 'common/src/store'
import { TrackState } from 'common/src/modules/tracks/tracks.types'

const Tracks = () => {
    const {tracks} = useSelector<State, TrackState>(state => state.tracks)

   
    return (
        
        <View style={{ marginTop: 35 }}>
            {/* <View style={{flexDirection: 'row'}}> */}
            <Heading text="Top Tracks" icon={<Entypo name="chevron-small-right" size={24} color="black" />} route='Top Tracks'/>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {tracks && tracks.map((track) => {
                    return <TrackAvatar track={track} key={track.track_id}/>
                })}

            </ScrollView>

        </View>
    )
}

export default Tracks