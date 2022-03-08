
import React, { useEffect, useState } from "react";
import { View, Text,  ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import yelp from "../api/yelp";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchInput, setSearchInput] = useState("Montreal");
  const [activeTab, setActiveTab] = useState("Delivery");
  const [errorMessage, setErrorMessage] = useState("");

  const getRestaurantsFromYelp = async () => {
    try {
      return await yelp
        .get("/search", {
          params: {
            limit: 50,
            term: "restaurants",
            location: searchInput,
          },
        })
        .then((response) => {
          const restaurants = response.data.businesses;
          const data = restaurants.filter((business) =>
            business?.transactions?.includes(activeTab.toLowerCase())
          );
          if (data.length != 0) {
            setRestaurantData(data);
          } else {
            setRestaurantData(restaurants);
          }
        });

      setErrorMessage("");
    } catch (err) {
      setErrorMessage("No restaurants");
      //console.log(err);
    }
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [searchInput, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setSearchInput={setSearchInput} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
