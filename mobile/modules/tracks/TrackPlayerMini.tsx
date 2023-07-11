import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { gradient_scheme } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Audio} from 'expo-av'
import { useDispatch, useSelector } from "react-redux";
import { State } from "common/src/store";
import { PlayState } from "common/src/modules/tracks/tracks.types";
import { START_PLAYING, STOP_PLAYING } from "common/src/constants";
import { useFocusEffect } from "@react-navigation/native";

const TrackPlayerMini = () => {
    const {track, shouldPlay, playing} = useSelector<State, PlayState>(state => state.playback)
    const dispatch = useDispatch();
    const [sound, setSound] = useState<Audio.SoundObject>()
    useEffect(() => {
        async function fn() {
            if (track && !playing) {
                try {
                    console.log('rendered play');
                    dispatch({type: START_PLAYING});
                    const sound = await Audio.Sound.createAsync({uri: `https://streamsonic.loca.lt/tracks/play/${track.track_id}`}, {shouldPlay})
                    setSound(sound);
                    console.log('played');
                    
                } catch (error) {
                    console.log(error);
                }
            }
        }
        fn()
    }, [track])
    useEffect(() => {
        console.log('min track rendered');
    }, [])
    const handlePlay = async () => {
        try {
            if (!sound) {
                const sound = await Audio.Sound.createAsync({uri: `https://streamsonic.loca.lt/tracks/play/${track.track_id}`}, {shouldPlay})
                sound.sound.playAsync();
                return;
            } 

            if (playing) {
                dispatch({type : STOP_PLAYING})
                sound.sound.pauseAsync();
            }
            else {
                dispatch({type: START_PLAYING})
                sound.sound.playAsync();
            }
        } catch (error) {
            
        }
        
    };
    if (!track) {
        return <View ></View>
    }
    return (
        <LinearGradient
            colors={gradient_scheme}
            style={{
                flexDirection: "row",
                flex: 1,
                borderRadius: 5,
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
                    <Entypo name={playing ? 'controller-paus' : 'controller-play'} size={24} color="white" />
                </Pressable>
            </View>
        </LinearGradient>
    );
};

export default TrackPlayerMini;
