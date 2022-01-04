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
          console.log(response.data.businesses);//filter doesn't work....
          setRestaurantData(response.data.businesses
            );
        }).then(json => {
          console.log(json);
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
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
