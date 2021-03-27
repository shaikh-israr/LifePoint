import * as React from "react";
import {
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from "react-native";
const { width, height } = Dimensions.get("screen");
import faker from "faker";

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      "women",
      "men",
    ])}/${faker.random.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

const SPACING = 20;
const AVATAR_SIZE = 70;

function Ranking() {
  return (
    <View style={{ flex: 10, backgroundColor: "#00001F" }}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
          padding: SPACING,
        }}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                marginBottom: SPACING,
                borderBottomColor: "#181835",
                borderBottomWidth: 3,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                  marginRight: SPACING / 2,
                }}
              />
              <View
                style={{
                  paddingLeft: 20,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#fff",
                    fontWeight: "900",
                  }}
                >
                  {item.name}
                </Text>
              </View>
              <View style={{ position: "absolute", left: 240, top: 20 }}>
                <Image
                  source={require("../assets/image.png")}
                  style={{ width: 50, height: 50 }}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

export default Ranking;
