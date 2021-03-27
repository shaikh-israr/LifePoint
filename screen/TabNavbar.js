import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./Home";
import Qr from "./Qr";
import Win from "./Win";
import Cart from "./Cart";
import { Image, StyleSheet } from "react-native";

const Tab = createMaterialBottomTabNavigator();
function TabNavbar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#D93069"
      barStyle={{ backgroundColor: "#020222" }}
    >
      <Tab.Screen
        name="."
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="vector-link"
              color={color}
              size={23}
            />
          ),
        }}
      />
      <Tab.Screen
        name="-"
        component={Qr}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="vector-square"
              color={color}
              size={23}
            />
          ),
        }}
      />

      <Tab.Screen
        name="-."
        component={Win}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="trophy" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name=".."
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={23} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({});

export default TabNavbar;
