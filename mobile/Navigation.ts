import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamsList = {
    Login: undefined;
    Root: {token : string} | undefined
    Onboarding : undefined
}
export const RootStack = createNativeStackNavigator<RootStackParamsList>();