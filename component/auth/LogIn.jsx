// components/login.js

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
} from "react-native";
// import auth, { firebase } from "@react-native-firebase/auth";

export class LogIn extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       email: "",
  //       password: "",
  //       isLoading: false,
  //     };
  //   }

  //   updateInputVal = (val, prop) => {
  //     const state = this.state;
  //     state[prop] = val;
  //     this.setState(state);
  //   };

  //   userLogin = () => {
  //     if (this.state.email === "" && this.state.password === "") {
  //       Alert.alert("Enter details to signin!");
  //     } else {
  //       this.setState({
  //         isLoading: true,
  //       });
  //       firebase
  //         .auth()
  //         .signInWithEmailAndPassword(this.state.email, this.state.password)
  //         .then((res) => {
  //           console.log(res);
  //           console.log("User logged-in successfully!");
  //           this.setState({
  //             isLoading: false,
  //             email: "",
  //             password: "",
  //           });
  //           this.props.navigation.navigate("HomeScreen");
  //         })
  //         .catch((error) => this.setState({ errorMessage: error.message }))
  //         .finally(() => {
  //           this.setState({
  //             isLoading: false,
  //           });
  //         });
  //     }
  //   };

  render() {
    // if (this.state.isLoading) {
    //   return (
    //     <View style={styles.preloader}>
    //       <ActivityIndicator size="large" color="#9E9E9E" />
    //     </View>
    //   );
    // }
    return (
      <ImageBackground
        source={{
          uri:
            "https://images.unsplash.com/photo-1519687730002-25d818c893cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c29jaWFsJTIwbWVkaWElMjBhcHB8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        }}
        style={styles.bgImg}
      >
        <View style={styles.container}>
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
            maxLength={15}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.props.navigation.navigate("HomeScreen");
            }}
          >
            <Text style={styles.btnText}>LogIn</Text>
          </TouchableOpacity>

          <Text
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate("Registration")}
          >
            Don't have account? Click here to signup
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
    // flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  bgImg: {
    flex: 1,
    resizeMode: "cover",
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
    marginTop: 25,
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
    backgroundColor: "#fff",
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
    paddingHorizontal: 117,
  },
});
export default function (props) {
  const navigation = useNavigation();
  return <LogIn {...props} navigation={navigation} />;
}
