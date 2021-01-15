import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";

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
      <View>
        <Entypo name="dots-three-horizontal" size={30} color="black" />
      </View>
      <Text style={style.heading}>SHOP</Text>
      <View>
        <Entypo name="shopping-bag" size={30} color="orange" />
      </View>
    </View>
  );
}

export default Header;
