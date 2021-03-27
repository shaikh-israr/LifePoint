import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
} from "react-native";
import HeaderComp from "../components/HeaderComp";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp />
      <Text
        style={{
          color: "#fff",
          paddingBottom: 25,
          fontSize: 23,
          paddingLeft: 15,
        }}
      >
        News
      </Text>
      <ScrollView scrollEventThrottle={16} horizontal={true}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00001F",
    paddingTop: 170,
  },
});
export default Home;
