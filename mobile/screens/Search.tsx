import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { gradient_scheme } from '../constants'
import CustomTextInput from '../ui/TextInput'
import { AntDesign } from '@expo/vector-icons'
import GenreList from '../modules/genre/GenreList'
import TrackPlayerMini from '../modules/tracks/TrackPlayerMini'
import { useIsFocused } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { State } from 'common/src/store'
import { PlayState } from 'common/src/modules/tracks/tracks.types'

const Search = () => {
    const focus = useIsFocused();
    const [search_field, setSearchField] = useState('');
    const {track} = useSelector<State, PlayState>(state => state.playback)
    return (
        <LinearGradient colors={gradient_scheme} style={{ flex: 1, padding: 10 }}>
            <Text style={{
                color: 'white',
                fontSize: 24,
                fontFamily: 'BalsamiqSans_400Regular',
                letterSpacing: 0.75,
                flex: 0.075,
            }}>
                Search
            </Text>

            {/* <View> */}
            <View style={{flex: 0.075}}>
                <CustomTextInput search_field={search_field} setSearchField={setSearchField} />
            </View>
            <View style={{flex: track ? 0.8 : 0.9}}>
            <GenreList />
            </View>
                
            {/* </View> */}
            {focus && <View style={{flex: track ? 0.1 : 0}}>
            <TrackPlayerMini />
            </View>}
        </LinearGradient>
    )
}

export default Search