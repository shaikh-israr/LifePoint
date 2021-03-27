import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Login from "./components/Login";
import LogInComp from "./components/LogInComp";
import TabNavbar from "./screen/TabNavbar";
import { NavigationContainer } from "@react-navigation/native";
import HeaderComp from "./components/HeaderComp";

const App = () => (
  <SafeAreaView style={styles.container}>
    {/* <Login /> */}
    {/* <LogInComp /> */}
    <NavigationContainer>
      <TabNavbar />
    </NavigationContainer>
    {/* <HeaderComp /> */}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
