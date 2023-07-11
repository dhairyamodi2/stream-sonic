import { View, Text, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const CustomTextInput: React.FC<{
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
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
        }}
      ></TextInput>
     {search_field.length === 0 &&  <View
        style={{
          position: "absolute",
          paddingTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flex: 1
        }}
      >
        <AntDesign name="search1" size={24} color={"black"} style={{flex: 0.08, marginLeft: 6, fontWeight: 'bold'}} />
        <Text style={{letterSpacing: 0.5, flex: 0.92}}>What do you want to listen to?</Text>
      </View>}
    </View>
  );
};

export default CustomTextInput;
