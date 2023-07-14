import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
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
import { fetchArtists } from 'client/src/modules/artists/client'
import { AlbumsWithUser, TracksWithArtists, User } from 'api/src/types/Prisma'
import { fetchAlbums } from 'client/src/modules/albums/client'
import { fetchTracks } from 'client/src/modules/tracks/client'
import Tag from '../ui/Tag'
import TrackInfo from '../modules/tracks/TrackInfo'
import AlbumInfo from '../modules/albums/AlbumInfo'


const Search = () => {
    const focus = useIsFocused();
    const [search_field, setSearchField] = useState('');
    const { track } = useSelector<State, PlayState>(state => state.playback)
    const [artists, setArtists] = useState<Array<User>>([])
    const [albums, setAlbums] = useState<Array<AlbumsWithUser>>([])
    const [tracks, setTracks] = useState<Array<TracksWithArtists>>([]);

    const [tag, setTag] = useState<'tracks' | 'artists' | 'albums'>('tracks');
    const handleSearch = async function (text: string) {
        setSearchField(text);

        const artists = await fetchArtists({ name: text })
        setArtists(artists.data);



        const albums = await fetchAlbums({ album_name: text })
        setAlbums(albums.data)


        const tracks = await fetchTracks({ track_name: text });
        setTracks(tracks.data);



    }
    return (
        <LinearGradient colors={gradient_scheme} style={{ flex: 1, padding: 10 }}>

            {/* <View> */}
            <View style={{ height: 70 }}>
                <CustomTextInput search_field={search_field} setSearchField={handleSearch} />
            </View>
            {search_field.length === 0 ? <View style={{ flex: 1 }}>
                <GenreList />
            </View> :
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                        <Tag name='tracks' setTag={setTag} tag={tag} text='Tracks' />
                        <Tag name='albums' setTag={setTag} tag={tag} text='Albums' />
                        <Tag name='artists' setTag={setTag} tag={tag} text='Artists' />


                    </View>

                    <View style={{ flex: 1 }}>
                        <ScrollView>
                        {tag === 'tracks' && tracks.map((track) => {
                            return <TrackInfo track={track} key={track.track_id} />
                        })}

                        {tag === 'albums' && albums.map((album) => {
                            return <AlbumInfo album={album} user={album.user}/>
                        })}
                        {/* {tag === 'tracks' && tracks.map((track) => {
                            return <TrackInfo track={track} key={track.track_id} />
                        })} */}
                        </ScrollView>
                    </View>

                </View>
            }

            {/* </View> */}
            {focus && <View style={{ height: track ? 70 : 0 }}>
                <TrackPlayerMini />
            </View>}
        </LinearGradient>
    )
}

export default Search