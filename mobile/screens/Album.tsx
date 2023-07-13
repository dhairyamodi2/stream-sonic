import { View, Text, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import { TabNavProps, TabRouteProps } from '../Navigation';
import { getAlbum } from 'client/src/modules/albums/client';
import { AlbumsWithTracksAndUser } from 'api/src/types/Prisma';
import { ActivityIndicator } from 'react-native-paper';
import { color_scheme, gradient_scheme } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import AlbumDetail from '../modules/albums/Album';
import TrackPlayerMini from '../modules/tracks/TrackPlayerMini';
import { useSelector } from 'react-redux';
import { State } from 'common/src/store';
import { PlayState } from 'common/src/modules/tracks/tracks.types';


const Album = () => {
    const {track} = useSelector<State, PlayState>(state => state.playback)
    const route = useRoute<TabRouteProps>();
    const navigator = useNavigation<TabNavProps>();
    const [loading, setLoading] = useState(true);
    const [album, setAlbum] = useState<AlbumsWithTracksAndUser>()
    useEffect(() => {
        if (route.params) {
            setLoading(true);
            getAlbum({album_id: route.params.album_id}).then((data) => {
                if (!data || !data.data) {
                    ToastAndroid.show("Album not found!", 1000);
                    navigator.goBack();
                    return;
                }
                setAlbum(data.data);
                setLoading(false);
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [route.params])
    const focus = useIsFocused();
    if (loading || !album) {
        return <LinearGradient colors={gradient_scheme} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><ActivityIndicator color={color_scheme} size={75} /></LinearGradient>
    }

   
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
        
       {album && <View style={{flex : track ? 0.9 : 1}}><AlbumDetail album={album}/></View>}
       {focus && <View style={{flex:track ? 0.1 : 0}}>
        <TrackPlayerMini />
       </View>}
    </View>
  )
}

export default Album