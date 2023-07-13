import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Album } from 'api/src/types/Prisma'
import { useNavigation } from '@react-navigation/native'
import { TabNavProps } from '../../Navigation'

const AlbumInfo: React.FC<{ album: Album }> = ({ album }) => {

    const navigator = useNavigation<TabNavProps>();
    const handlePress = () => {
        navigator.navigate('Album', {album_id: album.album_id, album_name: album.album_name})
    }
    return (
        <Pressable onPress={handlePress}>
            <View
                style={{
                    flexDirection: "row",
                    overflow: "hidden",
                    alignItems: "center",
                    marginLeft: 5,
                }}
            >
                <Image source={{ uri: album.album_image }} style={{
                    width: 50,
                    height: 50,
                    marginRight: 7,
                }} />

                <View>
                    <Text style={{ color: "white", fontSize: 15, fontFamily: 'BalsamiqSans_400Regular' }}>
                        {album.album_name}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

export default AlbumInfo