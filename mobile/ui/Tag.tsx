import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Tag: React.FC<{ tag: 'albums' | 'artists' | 'tracks', setTag: React.Dispatch<React.SetStateAction<"albums" | "artists" | "tracks">>, text: string, name: 'albums' | 'artists' | 'tracks'}> = ({ name, setTag, tag, text }) => {
    return (
        <Pressable style={{ padding: 15, backgroundColor: tag === name ? 'black' : '#FFFFFF12', borderRadius: 7 }} onPress={() => {
            setTag(name)
        }}>
            <Text style={{ color: 'white', fontSize: 15, fontFamily: 'BalsamiqSans_400Regular' }}>{text}</Text>
        </Pressable>
    )
}

export default Tag