import React from "react";
import { View, Text, Image } from "react-native";

const ProductCard = () => {
  return (
    <View
      style={{
        height: 330,
        width: 250,
        marginLeft: 20,
        borderWidth: 0.5,
        backgroundColor: "#171732",
        borderRadius: 7,
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
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            color: "#fff",
            paddingLeft: 10,
            paddingTop: 5,
            fontSize: 15,
          }}
        >
          Nike Joyride
        </Text>
        <Text
          style={{
            color: "#fff",
            paddingLeft: 10,
            paddingTop: 5,
            fontSize: 12,
            paddingBottom: 10,
          }}
        >
          Lorem ipsum dolor sit amet, consectetor
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
