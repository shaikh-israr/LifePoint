import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import HeaderComp from "../components/HeaderComp";
import Shop from "../components/Shop";
import ShopCd from "../components/shopCd";

function Cart() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp />
      <Text
        style={{
          marginLeft: 20,
          color: "white",
          paddingTop: 150,
          position: "absolute",
        }}
      >
        Shop
      </Text>
      <View
        style={{
          paddingTop: 190,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <ScrollView>
          <Shop />
          <Shop />
          <Shop />
          <Shop />
          <Shop />
          <Shop />
        </ScrollView>
        <ScrollView>
          <ShopCd />
          <ShopCd />
          <ShopCd />
          <ShopCd />
          <ShopCd />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00001F",
  },
});
export default Cart;
