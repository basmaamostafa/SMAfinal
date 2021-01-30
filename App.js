import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Registration } from "./component/auth/Registration";
// import Signup from "./Component/Authentication/Signup";
import { LogIn } from "./component/auth/LogIn";
import { SplashScreen } from "./component/splashScreen";
import { HomeScreen } from "./component/homeScreen";
// import Post from "./Component/PostHandle/Post";
// import { CameraPermission } from "./Component/Authentication/CameraPermission";
// import { ProfileImagePicker } from "./Component/Authentication/ProfileImagePicker";
// import PostForm from "./Component/PostHandle/PostForm";
// import * as firebase from "firebase";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    // return <HomeScreen />;

    return (
      <NavigationContainer
      // initialRouteName="hiiiiiii"
      // screenOptions={{
      //   headerTitleAlign: "center",
      //   headerStyle: {
      //     backgroundColor: "#3740FE",
      //   },
      //   headerTintColor: "#fff",
      //   headerTitleStyle: {
      //     fontWeight: "bold",
      //   },
      // }}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
              header: () => {
                "none";
              },
            }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            // options={{ headerLeft: null }}
          />
          {/* <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerLeft: null }}
          /> */}
          <Stack.Screen name="LogIn" component={LogIn} />
          {/* <Stack.Screen name="Post" component={Post} /> */}
          {/* <Stack.Screen name="CameraPermission" component={CameraPermission} /> */}
          {/* <Stack.Screen
            name="ProfileImagePicker"
            component={ProfileImagePicker}
          /> */}
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              header: () => {
                "none";
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// var firebaseConfig = {
//   apiKey: "AIzaSyD3VQOWE6cvKSKl8I_s7-hotpaF3Rd_LQY",
//   authDomain: "social-media-app-c7cc6.firebaseapp.com",
//   databaseURL: "https://social-media-app-c7cc6.firebaseio.com",
//   projectId: "social-media-app-c7cc6",
//   storageBucket: "social-media-app-c7cc6.appspot.com",
//   messagingSenderId: "825738176295",
//   appId: "1:433354287296:android:94f9604e42f3e7a9496525",
//   measurementId: "G-XKL6NBJ0YC",
// };
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// const dbh = firebase.firestore();
