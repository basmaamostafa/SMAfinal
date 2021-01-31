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
import { CameraPermission } from "./component/auth/CameraPermission";
import { ProfileImagePicker } from "./component/auth/ProfileImagePicker";
// import PostForm from "./Component/PostHandle/PostForm";
import * as firebase from "firebase";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    // return <Registration />;

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
    
          <Stack.Screen name="LogIn" component={LogIn} />
          {/* <Stack.Screen name="Post" component={Post} /> */}
          <Stack.Screen name="CameraPermission" component={CameraPermission} />
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

var firebaseConfig = {
  apiKey: "AIzaSyCQw_uI3T3R4iUDHgvUirSUYYRYZpOUnVI",
  authDomain: "smafinal-10af4.firebaseapp.com",
  databaseURL: "https://smafinal-10af4.firebaseio.com",
  projectId: "smafinal-10af4",
  storageBucket: "smafinal-10af4.appspot.com",
  messagingSenderId: "884747206930",
  appId: "1:884747206930:android:5e57d4e23a6d0502f733cb",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// const dbh = firebase.firestore();

// const firebaseConfig = {
//   apiKey: "AIzaSyCQw_uI3T3R4iUDHgvUirSUYYRYZpOUnVI",
//   authDomain: "smafinal-10af4.firebaseapp.com",
//   databaseURL: "https://smafinal-10af4.firebaseio.com",
//   projectId: "smafinal-10af4",
//   storageBucket: "smafinal-10af4.appspot.com",
//   messagingSenderId: "884747206930",
//   appId: "1:884747206930:android:5e57d4e23a6d0502f733cb",
//   // measurementId: 'G-measurement-id',
// };
// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// } else {
//   firebase.app(); // if already initialized, use that one
// }

// firebase.initializeApp(firebaseConfig);

// var firebaseConfig = {
//   apiKey: "AIzaSyDCLmhByEcNzE0SzTFUl1JB9b8WuKbfBfQ",
//   authDomain: "smafinal-10af4.firebaseapp.com",
//   projectId: "smafinal-10af4",
//   storageBucket: "smafinal-10af4.appspot.com",
//   messagingSenderId: "884747206930",
//   appId: "1:884747206930:web:46f49874ae533a0cf733cb"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
