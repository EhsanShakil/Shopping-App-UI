import * as React from "react";
import { Image, ScrollView, View, Text, StyleSheet } from "react-native";

const details = [
  {
    id: 1,
    title: "T Shirt",
    image:
      "https://i.insider.com/5e4706842dae5c5b6b43cf28?width=750&format=jpeg",
  },
  {
    id: 2,
    title: "T Shirt",
    image:
      "https://images.tailorstore.com/YToyOntzOjU6IndpZHRoIjtpOjExNTI7czo2OiJoZWlnaHQiO2I6MDt9/images/catalog/White%20cotton%20V-neck%20-%202%20pack%20t-shirt.jpg",
  },
  {
    id: 3,
    title: "T Shirt",
    image:
      "https://www.corporatetogs.co.uk/images/gildan-softstyle-v-neck-t-shirt-p6187-42126_medium.jpg",
  },
];

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
});

function Cards() {
  return (
    <ScrollView>
      <View>
        {details.map((items) => (
          <View style={style.card} key={items.id}>
            <Text style={style.text}>{items.title}</Text>
            <Image
              style={style.image}
              source={{ uri: items.image }}
              resizeMode="cover"
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default Cards;
