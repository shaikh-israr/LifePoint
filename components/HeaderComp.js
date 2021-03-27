import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

const HeaderComp = () => {
  return (
    <SafeAreaView style={styles.header}>
      <View
        style={{
          paddingLeft: 10,
          flex: 1,
          flexDirection: "row",
          paddingBottom: 10,
          padding: 10,
        }}
      >
        <Image
          source={require("../assets/man.png")}
          style={{
            borderRadius: 80,
            width: 70,
            height: 70,
          }}
        />
        <Text style={{ color: "#fff", margin: 20, fontSize: 16 }}>DavidW</Text>
        <View>
          <Text style={{ color: "#fff", paddingLeft: 60, fontSize: 12 }}>
            Point
          </Text>
          <Text
            style={{
              color: "#fff",
              paddingLeft: 60,
              fontSize: 20,
            }}
          >
            40
          </Text>
        </View>
        <View style={styles.ci}>
          <View style={styles.ci1}>
            <Image source={require("../assets/image.png")} style={styles.img} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#2E2A5C",
    marginBottom: 10,
    position: "absolute",
    paddingTop: 40,
  },
  ci: {
    width: 70,
    height: 70,
    borderWidth: 6,
    borderRadius: 80,
    borderColor: "black",
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  ci1: {
    width: 70,
    height: 70,
    position: "absolute",
    borderWidth: 6,
    borderRadius: 80,
    position: "absolute",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "#3498db",
    borderTopColor: "#3498db",
    transform: [{ rotateZ: "120deg" }],
  },
  img: {
    width: 35,
    height: 35,
    position: "relative",
    left: 10,
    top: 10,
    transform: [{ rotateZ: "240deg" }],
  },
});
