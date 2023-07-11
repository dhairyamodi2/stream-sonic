import { View, Text } from 'react-native'
import React from 'react'
import AllArtists from '../modules/artists/AllArtists'
import { LinearGradient } from 'expo-linear-gradient'
import { gradient_scheme } from '../constants'
import { State } from 'common/src/store'
import { PlayState } from 'common/src/modules/tracks/tracks.types'
import { useSelector } from 'react-redux'
import TrackPlayerMini from '../modules/tracks/TrackPlayerMini'

const Artists = () => {
  const {track} = useSelector<State, PlayState>(state => state.playback)

  return (
    <LinearGradient colors={gradient_scheme} style={{
        flex: 1
    }}>
      <AllArtists />
      {/* <View style={{flex: track ? 0.1 : 0, position: 'relative'}}>
            <TrackPlayerMini />
            </View> */}
    </LinearGradient>
  )
}

export default Artists