import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Shop = () => {
  return (
    <View
      style={{
        height: 150,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderRadius: 7,
        marginTop: 10,
      }}
    >
      <View style={{ flex: 2 }}>
        <Image
          source={require("../assets/Img.png")}
          style={{
            flex: 1,
            height: null,
            width: null,
            resizeMode: "cover",
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({});
