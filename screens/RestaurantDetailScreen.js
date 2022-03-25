import React from "react";
import { Text, View } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItem from "../components/restaurantDetail/MenuItem";
import ViewCart from "../components/restaurantDetail/ViewCart";

const RestaurantDetailScreen = ({ route, navigation }) => {
 // const formattedCategories = props.categories
  console.log(route.params);
  
  return (
    <View>
      <About
        name={route.params.name}
        image={route.params.image}
        price={route.params.price}
        reviews={route.params.reviews}
        rating={route.params.rating}
        categories={route.params.categories.map((cat) => cat.title).join(" ⸱ ")}
      />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurant={route.params} />
      <ViewCart navigation={navigation} location={route.params.location} />
    </View>
  );
};

export default RestaurantDetailScreen;
