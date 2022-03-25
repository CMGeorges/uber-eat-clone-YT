import React from "react";
import { Text, View } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItem from "../components/restaurantDetail/MenuItem";
import ViewCart from "../components/restaurantDetail/ViewCart";

const RestaurantDetailScreen = ({route, navigation}) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurant={route.params} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
};

export default RestaurantDetailScreen;
