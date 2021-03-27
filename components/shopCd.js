import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ShopCd = () => {
  return (
    <View
      style={{
        height: 180,
        width: 150,
        marginLeft: 5,
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

export default ShopCd;

const styles = StyleSheet.create({});
