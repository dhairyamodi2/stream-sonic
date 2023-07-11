import { Audio } from "expo-av";
import { ReactNode, createContext, useState } from "react";
import React from "react";


export interface SoundContext {
    sound? : Audio.SoundObject
    setSound : React.Dispatch<React.SetStateAction<Audio.SoundObject | undefined>>
}
export const Sound = createContext<SoundContext | null>(null);

export const SoundProvider = ({children} : {children : ReactNode}) => {
    const [sound, setSound] = useState<Audio.SoundObject>();
    return (
        <Sound.Provider value={{setSound, sound}}>
            {children}
        </Sound.Provider>
    )
}