import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Genre from './Genre'

const GenreList = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          <Genre backgroundColor='#E13300' imageSrc='https://i.scdn.co/image/ab6765630000ba8a9417936d038e7a2f8dee2554' name='Podcasts'></Genre>
          <Genre backgroundColor='rgb(115, 88, 255)' imageSrc='https://concerts.spotifycdn.com/images/live-events_category-image.jpg' name='Live Events'></Genre>
          <Genre backgroundColor='rgb(232, 17, 91)' name='Love' imageSrc='https://i.scdn.co/image/ab67fb8200005cafb03c6f8e7efca2ae36f41b31'></Genre>
          <Genre backgroundColor='rgb(225, 17, 140)' name='Mood' imageSrc='https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354'></Genre>
          <Genre backgroundColor='rgb(30, 50, 100);' name='Sleep' imageSrc='https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0'></Genre>
          <Genre backgroundColor='#E13300' imageSrc='https://i.scdn.co/image/ab6765630000ba8a9417936d038e7a2f8dee2554' name='Podcasts'></Genre>
          <Genre backgroundColor='rgb(115, 88, 255)' imageSrc='https://concerts.spotifycdn.com/images/live-events_category-image.jpg' name='Live Events'></Genre>
          <Genre backgroundColor='rgb(232, 17, 91)' name='Love' imageSrc='https://i.scdn.co/image/ab67fb8200005cafb03c6f8e7efca2ae36f41b31'></Genre>
          <Genre backgroundColor='rgb(225, 17, 140)' name='Mood' imageSrc='https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354'></Genre>
          <Genre backgroundColor='rgb(30, 50, 100);' name='Sleep' imageSrc='https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0'></Genre>
        </View>

        <View style={{ marginBottom: 10 }}>

        </View>
      </ScrollView>

    </View>
  )
}

export default GenreList