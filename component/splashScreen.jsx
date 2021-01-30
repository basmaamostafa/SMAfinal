import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export class SplashScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://images.unsplash.com/photo-1519687730002-25d818c893cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c29jaWFsJTIwbWVkaWElMjBhcHB8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        }}
        style={styles.bgImg}
      >
        <View style={styles.logoText}>
          <Image
            style={styles.logo}
            source={require("../assets/SMAlogo.png")}
          />
          <Text style={styles.text}> SMA </Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.props.navigation.navigate("Registration");
            }}
          >
            <Text style={styles.btnText}>Registration</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.props.navigation.navigate("LogIn");
            }}
          >
            <Text style={styles.btnText2}>LogIn</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();
  return <SplashScreen {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 90,
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  bgImg: {
    flex: 1,
    resizeMode: "cover",
  },
  logoText: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    paddingBottom: 40,
  },
  logo: {
    width: 150,
    height: 120,
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#000",
    padding: 10,
    marginBottom: 20,
    borderRadius: 15,
  },
  btnText: {
    color: "#fff",
    paddingHorizontal: 90,
  },
  btnText2: {
    color: "#fff",
    paddingHorizontal: 110,
  },
});
