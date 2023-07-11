import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { gradient_scheme } from '../constants'
import CustomTextInput from '../ui/TextInput'
import { AntDesign } from '@expo/vector-icons'
import GenreList from '../modules/genre/GenreList'
import TrackPlayerMini from '../modules/tracks/TrackPlayerMini'

const Search = () => {

    const [search_field, setSearchField] = useState('');
    return (
        <LinearGradient colors={gradient_scheme} style={{ flex: 1, padding: 10 }}>
            <Text style={{
                color: 'white',
                fontSize: 24,
                fontWeight: '900',
                fontFamily: 'sans-serif',
                letterSpacing: 0.75,
                flex: 0.1
            }}>
                Search
            </Text>

            {/* <View> */}
            <View style={{flex: 0.1}}>
                <CustomTextInput search_field={search_field} setSearchField={setSearchField} />
            </View>
            <View style={{flex: 0.7}}>
            <GenreList />
            </View>
                
            {/* </View> */}
            <View style={{flex: 0.1}}>
            <TrackPlayerMini />
            </View>
        </LinearGradient>
    )
}

export default Search