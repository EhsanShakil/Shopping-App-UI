import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { fetchAPI } from "./api";

function CardScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = async () => {
      setData(await fetchAPI());
    };
    response();
  }, []);

  if (!data) {
    return <Text>Loading....</Text>;
  }
  return (
    <ScrollView>
      {data.map((products) => (
        <TouchableOpacity
          style={style.card}
          key={products.id}
          onPress={() => {
            navigation.navigate("Details", {
              image: products.image,
              title: products.title,
            });
          }}
        >
          <Text style={style.text}>{products.title}</Text>
          <Image
            style={style.image}
            source={{ uri: products.image }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default CardScreen;

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
