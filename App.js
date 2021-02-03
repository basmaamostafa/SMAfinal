import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Registration } from "./component/auth/Registration";
import { LogIn } from "./component/auth/LogIn";
import { SplashScreen } from "./component/splashScreen";
import { HomeScreen } from "./component/homeScreen";
import EditPost from "./component/PostHandle/EditPost";
import * as firebase from "firebase";
import { LogBox } from "react-native";
const Stack = createStackNavigator();
LogBox.ignoreLogs([
  "Setting a timer for a long period of time",
  "Possible Unhandled Promise Rejection",
]);
export default class App extends Component {
  render() {
    // return <Registration />;

    return (
      <NavigationContainer>
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
          <Stack.Screen name="Registration" component={Registration} />

          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              header: () => {
                "none";
              },
            }}
          />
          <Stack.Screen
            name="EditPost"
            component={EditPost}
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
