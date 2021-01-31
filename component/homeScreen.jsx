import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";

import { useNavigation } from "@react-navigation/native";
// import PostsList from "./PostHandle/PostsList";
// import PostForm from "./PostHandle/PostForm";
// import Post from "./PostHandle/Post";
// import auth, { firebase } from "@react-native-firebase/auth";
import * as firebase from "firebase";

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [
        { id: 1 + Math.random(), text: " Default text 1" },
        { id: 1 + Math.random(), text: " Default text 2" },
        { id: 1 + Math.random(), text: " Default text 3" },
      ],
      id: 1 + Math.random(),
      task: "",
    };
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate("LogIn");
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  handleChange = (e) => {
    this.setState({
      task: e,
    });
  };

  handleSubmit = (e) => {
    const newTask = { id: this.state.id, text: this.state.task };
    const updateTask = [...this.state.taskList, newTask];
    this.setState({
      taskList: updateTask,
      task: "",
      id: 1 + Math.random(),
    });
  };

  handleDelete = (id) => {
    const filtterTask = this.state.taskList.filter((task) => task.id !== id);
    this.setState({ taskList: filtterTask });
  };
  render() {
    this.state = {
      displayName: firebase.auth().currentUser.displayName,
    };
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <TouchableOpacity style={styles.btn} onPress={() => this.signOut()}>
            <Text style={styles.btnText}>LogOut</Text>
          </TouchableOpacity>
          {/* <PostForm
            task={this.state.task}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          /> */}

          <Text style={styles.textStyle}>Hello, {this.state.displayName}</Text>

          {/* <PostsList
            taskList={this.state.taskList}
            handleDelete={this.handleDelete}
          /> */}

          {/* <Text>home</Text> */}
          {/* <Post /> */}
        </Content>
        {/* <StatusBar/> */}
      </Container>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();
  return <HomeScreen {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    backgroundColor: "#000",
    padding: 10,
    marginTop: 50,
    marginLeft: 280,
    borderRadius: 15,
    width: 80,
  },
  btnText: {
    color: "#fff",
    // paddingHorizontal: 80,
  },

  container: {
    // alignItems: "center",
    // marginHorizontal: 20,
    // paddingVertical: 40,
  },
  Post: {
    // marginVertical: 50,
  },
});
