import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableHighlight,
} from "react-native";

function LogInComp() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.spc}>
        <TextInput
          placeholder="EMAIL"
          placeholderTextColor="#fff"
          style={styles.inpt}
        />
        <TextInput
          placeholder="PASSWORD"
          placeholderTextColor="#fff"
          style={styles.inpt}
        />
        <Text style={{ color: "#fff", marginTop: 10 }}>Forget password?</Text>
        <View style={styles.space}>
          <TouchableHighlight style={{ borderRadius: 15 }}>
            <View style={styles.button}>
              <Text style={{ color: "#fff" }}>LOG IN</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ color: "#fff", alignItems: "center" }}>
            Don't have an account? Create one
          </Text>
        </View>
      </View>
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

  logo: {
    position: "relative",
    left: 35,
    top: 20,
    width: 140,
    height: 150,
    resizeMode: "contain",
  },
  spc: {},
  inpt: {
    color: "#fff",
    width: 260,
    height: 50,
    margin: 1,
    padding: 1,
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
  },
  space: {
    marginTop: 150,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#5098F2",
    padding: 10,
    borderRadius: 15,
  },
});

export default LogInComp;
