import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { color_scheme, gradient_scheme } from "../constants";
import { Entypo } from "@expo/vector-icons";
import { popToast } from "../utils/showToast";

const Premium = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={{
                    uri: "https://i.scdn.co/image/ab678e040000ed3a5fa79b96e3375f17699a7a2e",
                }}
                style={{
                    flex: 0.5,
                }}
            >
                <LinearGradient
                    colors={["#00000000", "#000000"]}
                    style={{
                        height: "100%",
                        width: "100%",
                        padding: 15,
                        justifyContent: "space-between",
                    }}
                >
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            source={require("../assets/logo.png")}
                            style={{
                                width: 40,
                                height: 40,
                            }}
                        ></Image>
                        <Text
                            style={{
                                color: "white",
                                letterSpacing: 1,
                                fontSize: 20,
                                fontFamily: "BalsamiqSans_700Bold",
                                marginLeft: 10,
                            }}
                        >
                            Streamsonic
                        </Text>
                    </View>
                    <View >
                        <Pressable
                            style={{
                                backgroundColor: "rgba(52, 52, 52, 0.8)",
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                width: 100,
                                padding: 10,
                                borderRadius: 5
                            }}
                            onPress={popToast}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    letterSpacing: 1,
                                    fontSize: 12,
                                    fontFamily: "BalsamiqSans_400Regular",
                                }}
                            >
                                FREE TRIAL
                            </Text>
                        </Pressable>
                        <Text
                            style={{
                                color: "white",
                                letterSpacing: 1,
                                fontSize: 30,
                                fontFamily: "BalsamiqSans_700Bold",
                            }}
                        >
                            Try Premium free for a month
                        </Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
            
            <LinearGradient colors={gradient_scheme} style={{ flex: 0.5, alignItems: 'center' }}>
                <Pressable style={{
                    backgroundColor: "#F9F4DA",
                    padding: 20,
                    borderRadius: 30,
                    width: '60%',
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }} onPress={popToast}>
                    <Text style={{
                        color: "black",
                        letterSpacing: 1,
                        fontSize: 18,
                        fontFamily: "BalsamiqSans_700Bold",
                    }}>GET PREMIUM</Text>
                </Pressable>


                <View style={{ backgroundColor: '#FFFFFF12', alignItems: 'flex-start', width: '93%', margin: 20 }}>
                    <Text style={{
                        color: "white",
                        letterSpacing: 1,
                        fontSize: 18,
                        padding: 10,
                        borderBottomColor: 'grey',
                        borderBottomWidth: 0.3,
                        width: '100%',
                        fontFamily: "BalsamiqSans_700Bold",
                    }}>Why join Premium?</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', padding: 15}}>
                        <Entypo name="flash" size={20} color="#90EE90" />
                        <Text
                            style={{
                                color: "white",
                                letterSpacing: 1,
                                fontSize: 15,
                                fontFamily: "BalsamiqSans_400Regular",
                            }}
                        >
                            Download to listen offline without wifi
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', padding: 15}}>
                        <Entypo name="flash" size={20} color="#90EE90" />
                        <Text
                            style={{
                                color: "white",
                                letterSpacing: 1,
                                fontSize: 15,
                                fontFamily: "BalsamiqSans_400Regular",
                            }}
                        >
                            Music without Interruptions
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', padding: 15}}>
                        <Entypo name="flash" size={20} color="#90EE90" />
                        <Text
                            style={{
                                color: "white",
                                letterSpacing: 1,
                                fontSize: 15,
                                fontFamily: "BalsamiqSans_400Regular",
                            }}
                        >
                            2x higher sound quality
                        </Text>
                    </View>
                    
                </View>


            </LinearGradient>
        </View>
    );
};

export default Premium;
