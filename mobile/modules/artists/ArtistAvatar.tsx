import React from "react";
import { Text, View } from "react-native";
import { Avatar } from "react-native-paper";


const ArtistAvatar = function () {
    return (
        <View style={{alignItems: 'center', marginRight: 20, marginTop: 20}}>
            <Avatar.Image size={130} source={{uri: 'https://i.scdn.co/image/ab6761610000517423c885de4c81852c917608ac'}} />
            <Text style={{
                color: 'white',
                fontSize: 15,
                marginTop: 7
            }}>Eminem</Text>
        </View>
    )
}


export default ArtistAvatar