import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { gradient_scheme } from '../constants'
import TrackList from '../modules/tracks/TrackList'
import { useDispatch, useSelector } from 'react-redux'
import {getTracks} from 'common/src/modules/tracks/tracks.actions'
import { State } from 'common/src/store'
import { TrackState } from 'common/src/modules/tracks/tracks.types'
import { ActivityIndicator } from 'react-native-paper'
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import { TabNavProps } from '../Navigation'

const Tracks = () => {
    const dispatch = useDispatch();
    const focussed = useIsFocused();
    useEffect(() => {
        console.log('rendered');
        dispatch(getTracks() as any)
    }, [focussed])

    const {isLoading, tracks} = useSelector<State, TrackState>(state => state.tracks)
    
  return (
    <LinearGradient colors={gradient_scheme} style={{
        flex: 1
    }}>
        {tracks.length === 0 && isLoading ? <ActivityIndicator animating={true} color={'#FBC02D'} size={100} /> : <TrackList />}
       {/* <TrackList /> */}
    </LinearGradient>
  )
}

export default Tracks