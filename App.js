import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigation from "./Navigation";
import Home from "./screens/Home";
import RestaurantDetailScreen from "./screens/RestaurantDetailScreen";

export default function App() {
  return <RootNavigation />;
}
 