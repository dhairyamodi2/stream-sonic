import { View, Text, TextStyle, StyleProp } from 'react-native'
import React, { ReactNode } from 'react'

const CustomText = ({ style, children }: { style?: StyleProp<TextStyle>, children: ReactNode }) => {
    return (
        <View>
            <Text style={[style, {fontFamily: 'BalsamiqSans_400Regular', color: 'white'}]}>{children}</Text>
        </View>
    )
}

export default CustomText