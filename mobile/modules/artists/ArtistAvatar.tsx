import { useNavigation } from "@react-navigation/native";
import { User } from "api/src/types/Prisma";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import { TabNavProps } from "../../Navigation";


const ArtistAvatar = function ({size, artist} : {size? : number, artist : User}) {
    const navigator = useNavigation<TabNavProps>()
    return (
        <Pressable onPress={() => {
            navigator.navigate('Artist', {artist_id: artist.user_id})
        }}>
        <View style={{alignItems: 'center', marginRight: 20, marginTop: 20}}>
            <Avatar.Image size={size ? size : 130 } source={{uri: artist.imageUri ? artist.imageUri : 'https://i.scdn.co/image/ab6761610000517423c885de4c81852c917608ac'}}  />
            <Text style={{
                color: 'white',
                fontSize: 15,
                marginTop: 7,
                fontFamily: 'BalsamiqSans_400Regular'
            }}>{artist.name}</Text>
        </View>
        </Pressable>
    )
}


export default ArtistAvatar