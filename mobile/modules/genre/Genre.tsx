import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { popToast } from "../../utils/showToast";

interface GenreProps {
    name : string;
    backgroundColor : string;
    imageSrc : string;
}
const Genre : React.FC<GenreProps> = ({name, backgroundColor, imageSrc}) => {
  return (
    <Pressable onPress={popToast}>
    <View style={{marginTop: 15}}>
      <View style={{ width: 180, height: 150, backgroundColor: backgroundColor , justifyContent: 'space-between', borderRadius: 8}}>
        <Text style={{
            alignSelf: 'flex-start',
            color: 'white',
            margin: 10,
            fontSize: 18,
            fontFamily: 'BalsamiqSans_400Regular'
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
    </Pressable>
  );
};

export default Genre;
