import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import HeaderComp from "../components/HeaderComp";

function Qr() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp />
      <View style={styles.cen}>
        <View>
          <Text style={{ color: "#fff", marginBottom: 90, marginLeft: -140 }}>
            DIGITAL MEMBER CARD
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../assets/qr-code.png")}
            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00001F",
  },
  card: {
    width: 200,
    height: 200,
    borderWidth: 5,
    borderColor: "#808080",
    borderRadius: 7,
  },
  cen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Qr;
