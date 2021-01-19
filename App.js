import React from "react";
import AppBarTab from "./src/AppBarTab";
import Cards from "./src/Cards";
import Header from "./src/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      {/* <NavigationContainer>
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
    </NavigationContainer> */}
      <Header />
      <Cards />
      <AppBarTab />
    </>
  );
}
