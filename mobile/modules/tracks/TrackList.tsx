import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import TrackInfo from './TrackInfo'
import { useDispatch, useSelector } from 'react-redux'
import { TrackState } from 'common/src/modules/tracks/tracks.types'
import { State } from 'common/src/store'
import { getTracks } from 'common/src/modules/tracks/tracks.actions'

const TrackList = () => {

  const { tracks } = useSelector<State, TrackState>(state => state.tracks)
  return (
    <View style={{ flex: 1 }}>
      <ScrollView >
        <View >
          {tracks && tracks.map((track) => {
            return <TrackInfo track={track} key={track.track_id} />
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default TrackList