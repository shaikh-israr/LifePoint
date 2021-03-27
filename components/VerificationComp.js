import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableHighlight,
} from "react-native";
import { Icon } from "react-native-elements";

function VerificationComp() {
  return (
    <SafeAreaView>
      <View style={styles.dir}>
        <Icon name="arrow-left" size={20} color="white" type="entypo" />
        <Text style={styles.txt1}>Verification</Text>
      </View>
      <View>
        <Text
          style={{
            color: "#fff",
            width: 280,
          }}
        >
          {`we have sent you a verification code to your email Id example@gamil.com`}
        </Text>
      </View>

      <View style={styles.space}>
        <TextInput
          style={styles.inpt}
          placeholder=""
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.inpt}
          placeholder=""
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.inpt}
          placeholder=""
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.inpt}
          placeholder=""
          placeholderTextColor="#fff"
        />
      </View>
      <View style={{ marginBottom: 50, marginTop: 70 }}>
        <TouchableHighlight style={{ borderRadius: 15 }}>
          <View style={styles.button}>
            <Text style={{ color: "#fff" }}>SEND</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Have an account? Log in
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root1: {
    flex: 1,
    flexDirection: "row",
  },
  txt1: {
    color: "#fff",
    fontSize: 30,
  },
  dir: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 40,
  },
  space: {
    marginTop: 40,
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#5098F2",
    padding: 10,
    borderRadius: 15,
  },
  inpt: {
    color: "#fff",
    width: 60,
    height: 50,
    margin: 1,
    padding: 1,
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
  },
});
export default VerificationComp;
