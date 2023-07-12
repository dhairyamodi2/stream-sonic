import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { TracksWithArtists } from 'api/src/types/Prisma'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { playTracks } from 'common/src/modules/tracks/tracks.actions'

const TrackInfo: React.FC<{ track: TracksWithArtists }> = ({ track }) => {
    const dispatch = useDispatch();
    const handlePress = async function () {
        await AsyncStorage.setItem("track", JSON.stringify(track));
        dispatch(playTracks(track, true) as any);
    }
    return (
        <Pressable onPress={handlePress}>
            <View
                style={{
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: 'space-between',
                    borderRadius: 5,
                    alignItems: 'center',
                    padding: 10,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        overflow: "hidden",
                        alignItems: "center",
                        marginLeft: 5,
                    }}
                >
                    <Image
                        source={{
                            uri: track.track_image,
                        }}
                        style={{
                            width: 50,
                            height: 50,
                            marginRight: 7,
                        }}
                    />

                    <View>
                        <Text style={{ color: "white", fontWeight: "900", fontSize: 15 }}>
                            {track.track_name}
                        </Text>
                        <Text style={{ color: "white", fontSize: 10 }}>
                            {track.artists.map((artist) => {
                                return artist.name
                            }).join(",").substring(0, 13)}
                        </Text>
                    </View>
                </View>


                <FontAwesome5 name="heart" size={24} color="white" />

            </View>
        </Pressable>
    )
}

export default TrackInfo