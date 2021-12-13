import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import yelp from "../api/yelp";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";


export default function Home() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getRestaurantsFromYelp = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: "restaurants",
          location: "montreal",
        },
      });
      setRestaurantData(response.data.businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("No restaurants");
    }
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
