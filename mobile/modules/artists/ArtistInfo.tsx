import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TabNavProps } from '../../Navigation';
import { User } from 'api/src/types/Prisma';

const ArtistInfo : React.FC<{artist : User}> = ({artist}) => {
    const navigator = useNavigation<TabNavProps>();
    const handlePress = () => {
        navigator.navigate('Artist', {artist_id: artist.user_id })
    }
    return (
        <Pressable onPress={handlePress} style={{padding: 10}}>
            <View
                style={{
                    flexDirection: "row",
                    overflow: "hidden",
                    alignItems: "center",
                    marginLeft: 5,
                }}
            >
                <Image source={{ uri: artist.imageUri ? artist.imageUri : 'https://i.scdn.co/image/ab6761610000517423c885de4c81852c917608ac' }} style={{
                    width: 50,
                    height: 50,
                    marginRight: 7,
                }} />

                <View>
                    <Text style={{ color: "white", fontSize: 15, fontFamily: 'BalsamiqSans_400Regular' }}>
                         {artist.name}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ArtistInfo