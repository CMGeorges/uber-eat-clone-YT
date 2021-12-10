import React, { useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY =
  "2txX4O1-3rVaZpwI-zyASNxERFxFTFurip4NiwZWeFD1LyVhsskNfvCcjMWnMbTU-L7LmPQu6T-n7rWEwNeQD75YEymgU2d7l-jxF1Kf4h_TxLMSCnhseMvSQ6SrYXYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState([]);

  const getRestaurantsFromYelp = () => {
    const yelpUrl =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood";

    const apiOptions = {
      //TODO: CORS Issues
      //mode: "no-cors",
      //Origin: ["http://localhost:19006/"],
      headers: {
        //"Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => {
        res.json();
      })
      .then((json) => {
        setRestaurantData(json.businesses);
      });
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
