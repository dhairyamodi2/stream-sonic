import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Heading from '../../ui/Heading'
import AlbumsAvatar from './AlbumsAvatar'
import { useSelector } from 'react-redux'
import { State } from 'common/src/store'
import { AlbumState } from 'common/src/modules/albums/albums.types'

const Albums = () => {
  const {topAlbums} = useSelector<State, AlbumState>(state => state.albums)
  return (
    <View style={{marginTop: 35}}>
            {/* <View style={{flexDirection: 'row'}}> */}
            <Heading text="Top Albums" />
        
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {topAlbums.map((topAlbum) => {
                return <AlbumsAvatar album={topAlbum} key={topAlbum.album_id}/>
              })}
            </ScrollView>
            
        </View>
  )
}

export default Albums