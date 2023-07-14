import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Heading from '../../ui/Heading'
import Artists from './Artists'
import ArtistAvatar from './ArtistAvatar'
import { useSelector } from 'react-redux'
import { State } from 'common/src/store'
import { ArtistsState } from 'common/src/modules/artists/artists.types'

const AllArtists = () => {
  const { topArtists } = useSelector<State, ArtistsState>(state => state.artists)
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          {topArtists.map((artist) => {
            return <ArtistAvatar artist={artist} key={artist.user_id} />
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default AllArtists