import { View, Text, Image } from 'react-native'
import React from 'react'

const TrackAvatar = () => {
  return (
    <View style={{ alignItems: "center", marginRight: 20, marginTop: 20 }}>
      <Image
        source={{
          uri: "https://i.scdn.co/image/ab67616d00001e02d2aaf635815c265aa1ecdecc",
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
  )
}

export default TrackAvatar