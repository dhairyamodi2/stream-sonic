import { View, Text, Image } from "react-native";
import React from "react";

interface GenreProps {
    name : string;
    backgroundColor : string;
    imageSrc : string;
}
const Genre : React.FC<GenreProps> = ({name, backgroundColor, imageSrc}) => {
  return (
    <View style={{marginTop: 15}}>
      <View style={{ width: 180, height: 150, backgroundColor: backgroundColor , justifyContent: 'space-between', borderRadius: 8}}>
        <Text style={{
            alignSelf: 'flex-start',
            color: 'white',
            fontWeight: 'bold',
            margin: 10,
            fontSize: 22
        }}>{name}</Text>

        <View style={{position: 'relative', overflow:'hidden'}}>
        <Image
          source={{
            uri: imageSrc,
          }}
          style={{
            width: 80,
            height: 80,
            alignSelf: 'flex-end',
            // position: 'relative',
            left: 20,
            // marginLeft: 20,
            transform: [{rotate: '20deg'}]
          }}
        />
        </View>
      </View>
    </View>
  );
};

export default Genre;