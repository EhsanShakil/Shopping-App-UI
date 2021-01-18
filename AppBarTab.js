import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Profile from "./Profile";

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
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
      <TouchableOpacity onPress={() => alert("Home")}>
        <Feather name="home" size={35} color="orange" />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.basket}>
        <Entypo name="shopping-bag" size={50} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Mine")}>
        <Ionicons name="person-outline" size={35} color="orange" />
        <Text>Mine</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AppBarTab;
