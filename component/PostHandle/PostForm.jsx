import React, { Component } from "react";
import {
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Content, Text } from "native-base";
import { PostImagePicker } from "./PostImagePicker";
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

export default class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      img: "",
      imgRef: null,
    };
    this.setImgRef = this.setImgRef.bind(this);
  }

  setImgRef = (imgRef) => {
    this.setState({ imgRef: imgRef });
  };

  handleChange = (e) => {
    this.setState({
      task: e,
    });
  };

  handleSubmit = async () => {
    var newTask = {
      text: this.state.task,
      posterName: firebase.auth().currentUser.displayName,
      posterId: firebase.auth().currentUser.uid,
    };

    await db
      .collection("posts")
      .add(newTask)
      .then(async (item) => {
        //img
        await this.uploadPostImg(item.id);
        newTask.id = item.id; //useless
      })
      .then(() => {
        this.props.updateTasks(); //fetch all tasks or posts
        this.setState({
          //reset feild
          task: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  uploadPostImg = async (postId) => {
    const response = await fetch(this.state.imgRef);
    const blob = await response.blob();
    var ref = firebase
      .storage()
      .ref()
      .child("PostImages/" + postId);
    return ref.put(blob);
  };

  render() {
    return (
      <Content contentContainerStyle={styles.container}>
        <View style={{ paddingBottom: 30 }}>
          <TextInput
            style={styles.textInput}
            placeholder="Write Your Caption"
            placeholderTextColor="rgba(0,0,0,0.5)"
            onChangeText={this.handleChange}
            value={this.task}
          />
          <PostImagePicker
            email={this.state.email}
            setImgRef={this.setImgRef}
          />
          {this.state.imgRef && (
            <Image
              source={{ uri: this.state.imgRef }}
              style={{
                width: 280,
                height: 150,
                borderRadius: 10,
                marginVertical: 10,
              }}
            />
          )}
          <TouchableOpacity style={styles.btn} onPress={this.handleSubmit}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
  },
  text: {
    fontSize: 20,
  },
  textInput: {
    height: 40,
    width: 270,
    fontSize: 18,
    marginBottom: 20,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 15,
  },
  btnText: {
    color: "#fff",
    paddingHorizontal: 117,
  },
});
