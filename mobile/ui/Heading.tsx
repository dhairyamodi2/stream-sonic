import { View, Text, Pressable } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { color_scheme } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@expo/vector-icons/build/createIconSet";
import { TabNavProps } from "../Navigation";

const Heading: React.FC<{ text: string; icon?: any, route : 'Artists' | 'Top Tracks'}> = ({ text, icon, route }) => {
  const navigator = useNavigation<TabNavProps>();
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {text}
      </Text>
      {icon && (
        <Pressable
          onPress={() => {
            navigator.navigate(route);
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                color: color_scheme,
                fontFamily: "sans-serif",
              }}
            >
              All
            </Text>
            <Entypo name="chevron-small-right" size={22} color={color_scheme} />
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default Heading;
