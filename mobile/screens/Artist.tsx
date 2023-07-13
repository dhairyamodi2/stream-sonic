import { View, Text, ActivityIndicator, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import TrackPlayerMini from '../modules/tracks/TrackPlayerMini';
import { LinearGradient } from 'expo-linear-gradient';
import { color_scheme, gradient_scheme } from '../constants';
import { useRoute, useNavigation, useIsFocused, RouteProp } from '@react-navigation/native';
import { AlbumsWithTracksAndUser, ArtistWithAlbumsAndTracks } from 'api/src/types/Prisma';
import { getAlbum } from 'client/src/modules/albums/client';
import { PlayState } from 'common/src/modules/tracks/tracks.types';
import { State } from 'common/src/store';
import { useSelector } from 'react-redux';
import { TabRouteProps, TabNavProps, TabNavParamsList } from '../Navigation';
import AlbumDetail from '../modules/albums/Album';
import { getArtist } from 'client/src/modules/artists/client';
import ArtistDetail from '../modules/artists/Artist';

const Artist = () => {
    const {track} = useSelector<State, PlayState>(state => state.playback)
    const route = useRoute<RouteProp<TabNavParamsList, 'Artist'>>();
    const navigator = useNavigation<TabNavProps>();
    const [loading, setLoading] = useState(true);
    const [artist, setArtist] = useState<ArtistWithAlbumsAndTracks>()
    useEffect(() => {
        if (route.params) {
            setLoading(true);
            getArtist({id : route.params.artist_id}).then((data) => {
                if (!data || !data.data) {
                    ToastAndroid.show("Album not found!", 1000);
                    navigator.goBack();
                    return;
                }
                setArtist(data.data);
                setLoading(false);
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [route.params.artist_id])
    const focus = useIsFocused();
    if (loading || !artist) {
        return <LinearGradient colors={gradient_scheme} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><ActivityIndicator color={color_scheme} size={75} /></LinearGradient>
    }

   
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
        
       {artist && <View style={{flex : track ? 0.9 : 1}}><ArtistDetail artist={artist}/></View>}
       {focus && <View style={{flex:track ? 0.1 : 0}}>
        <TrackPlayerMini />
       </View>}
    </View>
  )
}

export default Artist