import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Heading from '../../ui/Heading'
import AlbumsAvatar from './AlbumsAvatar'

const Albums = () => {
  return (
    <View style={{marginTop: 35}}>
            {/* <View style={{flexDirection: 'row'}}> */}
            <Heading text="Top Albums" />
        
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
             <AlbumsAvatar />
             <AlbumsAvatar />
             <AlbumsAvatar />
             <AlbumsAvatar />
             <AlbumsAvatar />
             <AlbumsAvatar />
            </ScrollView>
            
        </View>
  )
}

export default Albums