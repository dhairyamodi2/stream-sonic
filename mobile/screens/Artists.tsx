import { View, Text } from 'react-native'
import React from 'react'
import AllArtists from '../modules/artists/AllArtists'
import { LinearGradient } from 'expo-linear-gradient'
import { gradient_scheme } from '../constants'

const Artists = () => {
  return (
    <LinearGradient colors={gradient_scheme} style={{
        flex: 1
    }}>
      <AllArtists />
    </LinearGradient>
  )
}

export default Artists