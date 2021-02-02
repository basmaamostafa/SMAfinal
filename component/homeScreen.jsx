import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
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
import PostsList from "./PostHandle/PostsList";
import PostForm from "./PostHandle/PostForm";
import Post from "./PostHandle/Post";
import * as firebase from "firebase";

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
var db = firebase.firestore();

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [
        // {
        // id: 1 + Math.random(),
        // text: " Default text 1",
        // img:
        // "https://www.freecodecamp.org/news/content/images/size/w600/2020/04/rn-firebase-auth.png",
        // },
        { id: 1 + Math.random(), text: " Default text 2" },
        // { id: 1 + Math.random(), text: " Default text 3" },
      ],
      id: 1 + Math.random(),
      task: "",
      img: "",
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
    const newTask = {
      id: this.state.id,
      text: this.state.task,
      img: this.state.img,
      // uid: this.uid,
    };
    // console.log(db);
    db.collection("posts")
      // .document("post")
      // .set(caption)

      .add(newTask)
      .then((item) => {
        console.log(item.id);
      })
      .catch((error) => {
        console.log(error);
      });
    const updateTask = [...this.state.taskList, newTask];
    this.setState({
      taskList: updateTask,
      task: "",
      id: 1 + Math.random(),
      img: "",
      // uid: this.uid,
    });
  };

  getImageURI = async (uri) => {
    const ref = firebase.storage().ref("ProfileImages/" + uri);
    const url = await ref.getDownloadURL();
    this.setState({ displayImage: url });
  };

  handleEdit = (id) => {
    const filtterTask = this.state.taskList.filter((task) => task.id !== id); //return array with items dont have the same id
    // this.setState({ taskList: filtterTask });
    const selectedItem = this.state.taskList.find((task) => task.id === id); //match id
    console.log(selectedItem);
    this.setState({
      taskList: filtterTask,
      taskList: filtterTask.text,
      taskList: filtterTask.id,
      // id: id,
      editItem: true,
    });
  };

  handleDelete = (id) => {
    const postId = firebase.auth().currentUser.uid;
    const filtterTask = this.state.taskList.filter((task) => task.id !== id);
    this.setState({ taskList: filtterTask });
    db.collection("posts")
      .doc("item.id")
      .delete()
      .then((item) => {
        console.log("User deleted!");
      });
  };

  componentDidMount() {
    this.setState({ displayName: firebase.auth().currentUser.displayName });
    this.getImageURI(firebase.auth().currentUser.uid);
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <TouchableOpacity style={styles.btn} onPress={() => this.signOut()}>
            <Text style={styles.btnText}>LogOut</Text>
          </TouchableOpacity>
          <PostForm
            task={this.state.task}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          {/* {this.state.displayImage && (
            <Image
              source={{ uri: this.state.displayImage }}
              style={{
                width: 200,
                height: 200,
              }}
            />
          )}
          <Text style={styles.textStyle}>Hello, {this.state.displayName}</Text> */}

          <PostsList
            taskList={this.state.taskList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            imgProfile={this.state.displayImage}
            userName={this.state.displayName}
          />

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
