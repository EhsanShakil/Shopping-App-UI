import React from "react";
import { StackNavigator } from "react-navigation";
import CardScreen from "./CardScreen";
import CardDetails from "./CardDetails";

const CardNavigator = StackNavigator({
  CardScreen: { screen: CardScreen },
  CardDetails: { screen: CardDetails },
});
const CardNavigation = () => {
  return <CardNavigator />;
};
export default CardNavigation;
