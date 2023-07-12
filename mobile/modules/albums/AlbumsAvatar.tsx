import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { AlbumsWithUser } from "api/src/types/Prisma";

const AlbumsAvatar: React.FC<{ album: AlbumsWithUser }> = ({ album }) => {
  return (
    <Pressable onPress={() => {
      console.log(album.album_image)
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
          {album.album_name.length > 16 ? album.album_name.substring(0, 16) : album.album_name}
        </Text>
      </View>
    </Pressable>
  );
};

export default AlbumsAvatar;
