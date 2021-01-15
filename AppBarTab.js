import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  basket: {
    backgroundColor: "orange",
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});

function AppBarTab() {
  return (
    <View style={style.container}>
      <View>
        <Feather name="home" size={35} color="orange" />
        <Text>Home</Text>
      </View>
      <View
        style={{
          backgroundColor: "orange",
          borderRadius: 50,
          width: 80,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Entypo name="shopping-bag" size={50} color="white" />
      </View>
      <View>
        <Ionicons name="person-outline" size={35} color="orange" />
        <Text>Mine</Text>
      </View>
    </View>
  );
}

export default AppBarTab;
