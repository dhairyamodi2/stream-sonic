import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { gradient_scheme } from '../../constants'

const TrackPlayerMini = () => {

    useEffect(() => {
        console.log('rendered mini player')
    }, [])
  return (

    <LinearGradient colors={gradient_scheme} style={{
        flexDirection: 'row',
        flex: 1,
        borderRadius: 5,
        backgroundColor: 'red'
    }}>
        <View style={{
            flex: 0.75,
            flexDirection: 'row',
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginLeft: 5
        }}>
            <Image source={{uri: 'https://i.scdn.co/image/ab67616d00001e02d2aaf635815c265aa1ecdecc'}}
            style={{
                width: 50,
                height: 50,
                marginRight: 7
            }} />

            <View>
                <Text style={{color: 'white', fontWeight: '900', fontSize: 15}}>On My Way</Text>
                <Text style={{color: 'white', fontSize: 10}}>Alan Walker, Sabrina Carpenter</Text>
            </View>
        </View>

        <View style={{justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', flex: 0.25}}>
        <FontAwesome5 name="heart" size={24} color="white" />
        <Entypo name="controller-play" size={24} color="white" />
        </View>
    </LinearGradient>
  )
}

export default TrackPlayerMini