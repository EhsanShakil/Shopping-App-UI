import React from "react";
import { Image, View, StyleSheet } from "react-native";

function CardDetails({ route }) {
  const { title, image } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Text
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          position: "absolute",
          left: 10,
          top: 20,
          zIndex: 1,
        }}
      >
        Item: {title}
      </Text> */}
      <Image
        style={style.detailImage}
        source={{ uri: image }}
        resizeMode="contain"
      />
    </View>
  );
}

export default CardDetails;

const style = StyleSheet.create({
  card: {
    margin: 10,
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    display: "flex",
    width: "100%",
    height: 250,
  },
  text: {
    position: "absolute",
    zIndex: 1,
    padding: 10,
    fontSize: 20,
  },
  detailImage: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
});
