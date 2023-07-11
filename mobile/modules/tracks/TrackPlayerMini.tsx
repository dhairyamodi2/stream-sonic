import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { gradient_scheme } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Audio} from 'expo-av'
const TrackPlayerMini = () => {
    useEffect(() => {
        AsyncStorage.getItem("track").then((item) => {
            console.log(JSON.parse(item!));
        });
        // console.log(JSON.parse(item))
    }, []);

    const handlePlay = async () => {
        try {
            await Audio.Sound.createAsync({uri: `https://streamsonic.loca.lt/tracks/play/8f965c81-3e94-4363-a4b5-41d7c8704e92`}, {shouldPlay: true})
        } catch (error) {
            console.log(error);
        }
        
    };
    return (
        <LinearGradient
            colors={gradient_scheme}
            style={{
                flexDirection: "row",
                flex: 1,
                borderRadius: 5,
                backgroundColor: "red",
            }}
        >
            <View
                style={{
                    flex: 0.75,
                    flexDirection: "row",
                    overflow: "hidden",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginLeft: 5,
                }}
            >
                <Image
                    source={{
                        uri: "https://i.scdn.co/image/ab67616d00001e02d2aaf635815c265aa1ecdecc",
                    }}
                    style={{
                        width: 50,
                        height: 50,
                        marginRight: 7,
                    }}
                />

                <View>
                    <Text style={{ color: "white", fontWeight: "900", fontSize: 15 }}>
                        On My Way
                    </Text>
                    <Text style={{ color: "white", fontSize: 10 }}>
                        Alan Walker, Sabrina Carpenter
                    </Text>
                </View>
            </View>

            <View
                style={{
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 0.25,
                }}
            >
                <FontAwesome5 name="heart" size={24} color="white" />
                <Pressable onPress={handlePlay}>
                    <Entypo name="controller-play" size={24} color="white" />
                </Pressable>
            </View>
        </LinearGradient>
    );
};

export default TrackPlayerMini;
