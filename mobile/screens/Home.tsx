import { ScrollView, Text, View } from "react-native"
import React from "react"
import { gradient_scheme } from "../constants";
import {LinearGradient} from 'expo-linear-gradient'
import Header from "../ui/Header";

const Home = function () {
    return (
        <LinearGradient colors={gradient_scheme} style={{flex: 1, padding: 10}}>
            <Header />

            <ScrollView style={{flex: 0.9, paddingLeft: 10, paddingTop: 10, paddingBottom: 50}}>
            <Text style={{color: 'white'}} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui doloremque aperiam provident vitae omnis deserunt temporibus accusamus sint, nam, perspiciatis eos id dignissimos. Nisi quidem sequi ab qui inventore!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus minima maxime sequi ducimus rem voluptas, pariatur, eum ut nihil facilis tenetur quis nesciunt veritatis. Minima unde alias rerum inventore!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil amet veniam, perspiciatis optio tenetur eius doloribus eos architecto obcaecati dolorum aliquam maxime, natus necessitatibus rem in, qui quaerat soluta voluptas!Lorem
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id exercitationem, cum mollitia labore aperiam reprehenderit natus accusamus est nesciunt doloribus dolor unde, aliquid nihil vel voluptatem nulla dignissimos repudiandae!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            </Text>
            </ScrollView>
           

            <Text style={{color: 'tomato', backgroundColor: 'blue'}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis aut hic nemo illo quisquam sit exercitatinsk
            </Text>
        </LinearGradient>
    )
}

export default Home;