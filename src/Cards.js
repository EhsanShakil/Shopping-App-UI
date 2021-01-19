import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
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

const Stack = createStackNavigator();

export default function Cards() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={CardScreen}
        />
        <Stack.Screen
          name="Details"
          options={{ headerShown: false }}
          component={CardDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
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
