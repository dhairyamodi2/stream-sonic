import { View, Text, Image } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";

const AlbumsAvatar = () => {
  return (
    <View style={{ alignItems: "center", marginRight: 20, marginTop: 20 }}>
      <Image
        source={{
          uri: "https://i.scdn.co/image/ab67706f000000021888f73e300bd0ee976b0180",
        }}
        
        style={{borderRadius: 2, width: 120, height: 120}}
      />
      <Text
        style={{
          color: "white",
          fontSize: 15,
          marginTop: 7,
        }}
      >
        Different World
      </Text>
    </View>
  );
};

export default AlbumsAvatar;
