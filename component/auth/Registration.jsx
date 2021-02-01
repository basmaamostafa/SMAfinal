import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  InputText,
} from "react-native";
import { FontAwesome, Feather, Entypo } from "@expo/vector-icons";
import { ProfileImagePicker } from "./ProfileImagePicker";
import CameraPermission from "./CameraPermission";

// import auth, { firebase } from "@react-native-firebase/auth";
import * as firebase from "firebase";

export class Registration extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      isLoading: false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  registerUser = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Enter details to is Register!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName,
          });
          console.log("User registered successfully!");
          this.setState({
            isLoading: false,
            displayName: "",
            email: "",
            password: "",
          });
          this.props.navigation.navigate("LogIn");
        })
        .catch((error) => this.setState({ errorMessage: error.message }))
        .finally(() => {
          this.setState({
            isLoading: false,
          });
        });
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <ImageBackground
        source={{
          uri:
            "https://images.unsplash.com/photo-1519687730002-25d818c893cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c29jaWFsJTIwbWVkaWElMjBhcHB8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        }}
        style={styles.bgImg}
      >
        <View style={styles.container}>
          <View style={[styles.imgIcon]}>
            <TouchableOpacity
              style={styles.btnIcon}
              onPress={() => {
                this.props.navigation.navigate("CameraPermission");
              }}
            >
              <FontAwesome name="camera" size={28} color="#fff" />
            </TouchableOpacity>
            
            {/* <CameraPermission /> */}
            <ProfileImagePicker email={this.state.email} />
          </View>
          <TextInput
            style={styles.inputStyle}
            placeholder="Name"
            value={this.state.displayName}
            onChangeText={(val) => this.updateInputVal(val, "displayName")}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            value={this.state.email}
            onChangeText={(val) => this.updateInputVal(val, "email")}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            value={this.state.password}
            onChangeText={(val) => this.updateInputVal(val, "password")}
            maxLength={8}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.registerUser()}
          >
            <Text style={styles.btnText}>Create Account</Text>
          </TouchableOpacity>
          <Text
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate("LogIn")}
          >
            Already Registered? Click here to login {this.state.errorMessage}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  inputStyle: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#fff",
    borderBottomWidth: 1,
  },
  loginText: {
    color: "#fff",
    marginTop: 15,
    textAlign: "center",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    fontSize: 14,
    color: "#fff",
  },
  bgImg: {
    flex: 1,
    resizeMode: "cover",
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#000",
    padding: 10,
    marginTop: 20,
    borderRadius: 15,
  },

  btnText: {
    color: "#fff",
    paddingHorizontal: 80,
  },

  btnIcon: {
    marginLeft: 80,
  },
  imgIcon: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
export default function (props) {
  const navigation = useNavigation();
  return <Registration {...props} navigation={navigation} />;
}
