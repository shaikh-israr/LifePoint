import React from "react";
import { StyleSheet, View, SafeAreaView, Image } from "react-native";
import ForgetComp from "./ForgetComp";
import LogInComp from "./LogInComp";
import RestpasComp from "./RestpasComp";
import VerificationComp from "./VerificationComp";

function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circle}>
        <Image style={styles.logo} source={require("../assets/image.png")} />
      </View>
      {/* <LogInComp /> */}
      {/* <ForgetComp /> */}
      {/* <RestpasComp /> */}
      <VerificationComp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00001F",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    borderRadius: 105,
    width: 210,
    height: 210,
    borderWidth: 2,
    borderColor: "#24244B",
    backgroundColor: "#00001F",
    marginTop: 80,
  },
  logo: {
    position: "relative",
    left: 35,
    top: 20,
    width: 140,
    height: 150,
    resizeMode: "contain",
  },
});

export default Login;
