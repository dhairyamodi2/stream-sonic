import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { TracksWithArtists } from 'api/src/types/Prisma'

const TrackInfo : React.FC<{track : TracksWithArtists}> = ({track}) => {
    return (
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
                        Alan Walker, Sabrina Carpenter
                    </Text>
                </View>
            </View>

           
                <FontAwesome5 name="heart" size={24} color="white" />
        
        </View>
    )
}

export default TrackInfo