import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { AlbumsWithUser } from "api/src/types/Prisma";
import { useNavigation } from "@react-navigation/native";
import { TabNavProps } from "../../Navigation";

const AlbumsAvatar: React.FC<{ album: AlbumsWithUser }> = ({ album }) => {
  const navigator = useNavigation<TabNavProps>()
  return (
    <Pressable onPress={() => {
        navigator.navigate('Album', {album_id: album.album_id, album_name: album.album_name});
    }}>
      <View style={{ alignItems: "center", marginRight: 20, marginTop: 20 }}>
        <Image
          source={{
            uri: album.album_image,
          }}

          style={{ borderRadius: 2, width: 120, height: 120 }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 15,
            marginTop: 7,
          }}
        >
          {album.album_name.length > 13 ? album.album_name.substring(0, 13) : album.album_name}
        </Text>
      </View>
    </Pressable>
  );
};

export default AlbumsAvatar;
