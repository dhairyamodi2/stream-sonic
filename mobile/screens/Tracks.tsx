import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { gradient_scheme } from '../constants'
import TrackList from '../modules/tracks/TrackList'
import { useDispatch, useSelector } from 'react-redux'
import { getTracks } from 'common/src/modules/tracks/tracks.actions'
import { State } from 'common/src/store'
import { PlayState, TrackState } from 'common/src/modules/tracks/tracks.types'
import { ActivityIndicator } from 'react-native-paper'
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import { TabNavProps } from '../Navigation'
import TrackPlayerMini from '../modules/tracks/TrackPlayerMini'

const Tracks = () => {
    const dispatch = useDispatch();
    const focussed = useIsFocused();

    const { isLoading, tracks } = useSelector<State, TrackState>(state => state.tracks)
    const { track } = useSelector<State, PlayState>(state => state.playback)
    return (
        <LinearGradient colors={gradient_scheme} style={{
            flex: 1
        }}>
            <View style={{flex: track ? 0.9: 1}}>
                {tracks.length === 0 && isLoading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator animating={true} color={'#FBC02D'} size={80} />
                </View> : <TrackList />}
            </View>
            {focussed && <View style={{ flex: track ? 0.1 : 0 }}>
                <TrackPlayerMini />
            </View>}

        </LinearGradient>
    )
}

export default Tracks