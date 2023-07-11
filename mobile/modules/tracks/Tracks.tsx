import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Heading from '../../ui/Heading'
import AlbumsAvatar from '../albums/AlbumsAvatar'
import TrackAvatar from './TrackAvatar'
import { Entypo } from '@expo/vector-icons'

const Tracks = () => {
    return (
        <View style={{ marginTop: 35 }}>
            {/* <View style={{flexDirection: 'row'}}> */}
            <Heading text="Top Tracks" icon={<Entypo name="chevron-small-right" size={24} color="black" />} route='Top Tracks'/>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TrackAvatar />

                <TrackAvatar />
                <TrackAvatar />
                <TrackAvatar />
                <TrackAvatar />
                <TrackAvatar />
                <TrackAvatar />
                <TrackAvatar />

            </ScrollView>

        </View>
    )
}

export default Tracks