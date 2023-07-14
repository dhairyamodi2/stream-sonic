import { View, Text, Pressable, ScrollView, Touchable, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { color_scheme, gradient_scheme } from '../constants'
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
import ArtistInfo from '../modules/artists/ArtistInfo'
import { ActivityIndicator, Button } from 'react-native-paper'


const Search = () => {
    const focus = useIsFocused();
    const [search_field, setSearchField] = useState('');
    const { track } = useSelector<State, PlayState>(state => state.playback)
    const [artists, setArtists] = useState<Array<User>>([])
    const [albums, setAlbums] = useState<Array<AlbumsWithUser>>([])
    const [tracks, setTracks] = useState<Array<TracksWithArtists>>([]);
    const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState<'tracks' | 'artists' | 'albums'>('tracks');
    const [tapped, setTapped] = useState(false);
    const handleSearch = async function (text: string) {
        setTapped(true);
        setLoading(true);
        const artists = await fetchArtists({ name: text })
        setArtists(artists.data);



        const albums = await fetchAlbums({ album_name: text })
        setAlbums(albums.data)


        const tracks = await fetchTracks({ track_name: text });
        setTracks(tracks.data);
        setLoading(false);
    }
    useEffect(() => {
        return () => {
            setTapped(false);
            setSearchField('');
            setArtists([]);
            setAlbums([]);
            setTracks([])
            setLoading(false);
        }
    }, [focus])
    return (
        <LinearGradient colors={gradient_scheme} style={{ flex: 1, padding: 10 }}>

            {/* <View> */}
            <View style={{ height: 70, flexDirection: 'row', alignItems:'center', justifyContent: 'space-between' }}>
                <View style={{flex: 1}}>
                <CustomTextInput search_field={search_field} setSearchField={setSearchField} />
                </View>
                <TouchableOpacity style={{marginTop: 10, marginLeft: 10,  backgroundColor: "#F9F4DA", padding: 5, borderRadius: 5}} onPress={() => handleSearch(search_field)}>
                    <AntDesign name='search1' color={'black'} size={30}></AntDesign>
                </TouchableOpacity>
            </View>
            {!tapped ? <View style={{ flex: 1 }}>
                <GenreList />
            </View> :
            loading ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator color={color_scheme} size={50}></ActivityIndicator></View> : <View style={{flex: 1}}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                        <Tag name='tracks' setTag={setTag} tag={tag} text='Tracks' />
                        <Tag name='albums' setTag={setTag} tag={tag} text='Albums' />
                        <Tag name='artists' setTag={setTag} tag={tag} text='Artists' />


                    </View>

                    <View style={{ flex: 1 }}>
                        <ScrollView keyboardShouldPersistTaps='always'>
                        {tag === 'tracks' && tracks.map((track) => {
                            return <TrackInfo track={track} key={track.track_id} />
                        })}

                        {tag === 'albums' && albums.map((album) => {
                            return <AlbumInfo album={album} user={album.user} key={album.album_id}/>
                        })}
                        {tag === 'artists' && artists.map((artist) => {
                            return <ArtistInfo  artist={artist} key={artist.user_id}/>
                        })}
                        </ScrollView>
                    </View>

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