import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const style = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

function Header() {
  return (
    <View style={style.header}>
      <TouchableOpacity>
        <Entypo name="dots-three-horizontal" size={30} color="black" />
      </TouchableOpacity>
      <Text style={style.heading}>SHOP</Text>
      <TouchableOpacity>
        <Entypo name="shopping-bag" size={30} color="orange" />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
