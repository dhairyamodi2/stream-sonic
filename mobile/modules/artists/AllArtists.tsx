import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Heading from '../../ui/Heading'
import Artists from './Artists'
import ArtistAvatar from './ArtistAvatar'

const AllArtists = () => {
  return (
    <View style={{flex: 1}}>
        <ScrollView>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        <ArtistAvatar />

        <ArtistAvatar />
        <ArtistAvatar />
        <ArtistAvatar />
        <ArtistAvatar />
        <ArtistAvatar />
        <ArtistAvatar />
        <ArtistAvatar />
      </View>
      </ScrollView>
    </View>
  )
}

export default AllArtists