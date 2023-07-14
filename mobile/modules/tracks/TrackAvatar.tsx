import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { TrackWithArtistsAndAlbums, TracksWithArtists } from 'api/src/types/Prisma'
import { useDispatch } from 'react-redux'
import { playTracks } from 'common/src/modules/tracks/tracks.actions'

const TrackAvatar: React.FC<{ track: TracksWithArtists }> = ({ track }) => {

  const dispatch = useDispatch();
  const handlePlay = () => {
    dispatch(playTracks(track, true) as any);
  }
  return (
    <Pressable onPress={handlePlay}>
      <View style={{ alignItems: "center", marginRight: 20, marginTop: 20 }}>
        <Image
          source={{
            uri: track.track_image,
          }}

          style={{ borderRadius: 2, width: 120, height: 120 }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 15,
            marginTop: 7,
            fontFamily: 'BalsamiqSans_400Regular'
          }}
        >
          {track.track_name.length > 13 ? track.track_name.substring(0, 13) : track.track_name}
        </Text>
      </View>
    </Pressable>
  )
}

export default TrackAvatar