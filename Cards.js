import React from "react";
import {
  Image,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Profile from "./Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const details = [
  {
    id: 1,
    title: "T Shirt",
    image:
      "https://static.massimodutti.net/3/photos/2019/I/0/2/p/0115/082/403//0115082403_1_1_3.jpg?t=1557495984871",
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
  detailImage: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
});
function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      {details.map((items) => (
        <TouchableOpacity
          style={style.card}
          key={items.id}
          onPress={() => {
            navigation.navigate("Details", {
              image: items.image,
              title: items.title,
            });
          }}
        >
          <Text style={style.text}>{items.title}</Text>
          <Image
            style={style.image}
            source={{ uri: items.image }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function DetailsScreen({ route }) {
  const { title, image } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Text>Item: {title}</Text> */}
      <Image
        style={style.detailImage}
        source={{ uri: image }}
        resizeMode="cover"
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function Cards() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Details"
          options={{ headerShown: false }}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
