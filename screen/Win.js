import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, Switch } from "react-native";
import HeaderComp from "../components/HeaderComp";
import Ranking from "../components/Ranking";

function Win() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp />
      <View style={styles.col}>
        <Text style={{ color: "#fff", fontSize: 20, paddingLeft: 20, flex: 1 }}>
          RANKING
        </Text>
        <Text style={{ color: "#fff", paddingRight: 40 }}>Monthly</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#36C7FF"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ position: "absolute", top: 140, left: 255 }}
        />
        <Text style={{ color: "#fff", paddingLeft: 20, paddingRight: 20 }}>
          Yearly
        </Text>
      </View>
      <Ranking />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00001F",
  },
  col: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 140,
  },
});
export default Win;
