import { View, Text } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { color_scheme } from '../constants'

const Heading: React.FC<{ text: string }> = ({ text }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: 'white', fontFamily: 'sans-serif' }}>{text}</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: color_scheme, fontFamily: 'sans-serif' }}>All</Text>
                <Entypo name="chevron-small-right" size={22} color={color_scheme} />
            </View>
        </View>
    )
}

export default Heading