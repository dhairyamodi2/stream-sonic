import { View, Text, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const CustomTextInput: React.FC<{
  setSearchField:  React.Dispatch<React.SetStateAction<string>>
  search_field: string;
}> = ({ search_field, setSearchField }) => {
  return (
    <View style={{marginTop: 10}}>
      <TextInput
        onChangeText={(text) => setSearchField(text)}
        value={search_field}
        cursorColor={"white"}
        style={{
          backgroundColor: "white",
          letterSpacing: 1,
          padding: 10,
          borderRadius: 5,
          zIndex: 2
        }} placeholder="What do you want to listen to?"
      ></TextInput>
    </View>
  );
};

export default CustomTextInput;
