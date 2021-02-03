import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Container, Content, Text } from "native-base";

import { useNavigation } from "@react-navigation/native";
import PostsList from "./PostHandle/PostsList";
import PostForm from "./PostHandle/PostForm";
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
      taskList: [],
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

  getImageURI = async (uri) => {
    const ref = firebase.storage().ref("ProfileImages/" + uri);
    const url = await ref.getDownloadURL();
    this.setState({ displayImage: url });
  };

  getPosts = async () => {
    //get all posts
    const result = await db.collection("posts").get();
    const taskList = result.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    this.setState({ taskList: taskList });
  };

  handleDelete = async (id) => {
    await db
      .collection("posts")
      .doc(id)
      .delete()
      .then(() => {
        // Create a reference to the file to delete
        var imgRef = firebase.storage().ref("PostImages/" + id);
        // Delete the file
        imgRef
          .delete()
          .then(() => {
            this.getPosts();
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };

  componentDidMount() {
    this.getPosts();
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
          <PostForm updateTasks={() => this.getPosts()} />

          <PostsList
            taskList={this.state.taskList}
            handleDelete={this.handleDelete}
            // handleEdit={this.handleEdit}
          />
        </Content>
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
