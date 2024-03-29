import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./screens/Home";
import RestaurantDetailScreen from "./screens/RestaurantDetailScreen";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

const RootNavigation = () => {
  const Stack = createStackNavigator();
  

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </ReduxProvider>
  );
};

export default RootNavigation;
