import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
} from "native-base";
import * as firebase from "firebase";

export default class EditPost extends Component {
  constructor() {
    super();
    this.state = {
      postImage: null,
      posterImage: null,
      name: null,
      text: null,
      posterID: null,
      id: null,
    };
  }

  getImageURI = async (postID) => {
    // Post Image
    const ref = firebase.storage().ref("PostImages/" + postID);
    const url = await ref.getDownloadURL();
    this.setState({ postImage: url });
  };

  getPosterImageURI = async (posterID) => {
    // Poster Image
    const ref = firebase.storage().ref("ProfileImages/" + posterID);
    const url = await ref.getDownloadURL();
    this.setState({ posterImage: url });
  };

  async componentDidMount() {
    const collection = firebase.firestore().collection("posts");
    var doc = collection.doc(this.props.route.params.postID);
    var post = (await doc.get()).data();
    this.setState({
      name: post.posterName,
      text: post.text,
      posterID: post.posterId,
      id: doc.id,
    });
    console.log(post);
    this.getImageURI(this.state.id);
    this.getPosterImageURI(this.state.posterID);
  }

  editHandle = async () => {
    const collection = firebase.firestore().collection("posts");
    var doc = collection.doc(this.props.route.params.postID);
    var post = {
      posterId: this.state.posterID,
      posterName: this.state.name,
      text: this.state.text,
    };
    doc
      .set(post)
      .then(async () => {
        await this.props.navigation.push("HomeScreen");
      })
      .catch((err) => console.log("1"));
  };

  render() {
    const { postImage } = this.state;
    const { navigation } = this.props.navigation;
    console.log(this.props.route.params.postID);
    return (
      <Content contentContainerStyle={styles.container}>
        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail
                style={styles.profile}
                source={{ uri: this.state.posterImage }}
              />
              <Body>
                <Text style={{ fontSize: 18 }}>{this.state.name}</Text>
              </Body>
            </Left>
          </CardItem>
          <Text style={styles.caption}> {this.state.text}</Text>
          <CardItem cardBody>
            {postImage && (
              <Image
                source={{
                  uri: postImage,
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            )}
          </CardItem>
        </Card>
        <TextInput
          style={styles.textInput}
          placeholder="Write Your Caption"
          placeholderTextColor="rgba(0,0,0,0.5)"
          onChangeText={(e) => {
            this.setState({ text: e });
          }}
          value={this.state.text}
        />
        <TouchableOpacity style={styles.btn} onPress={this.editHandle}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
  },
  card: {
    width: "90%",
    marginBottom: 10,
  },
  profile: {
    width: 45,
    height: 45,
  },
  btns: {
    flex: 1,
    flexDirection: "row",
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
  caption: {
    marginLeft: 15,
    paddingBottom: 10,
  },
  textInput: {
    height: 40,
    width: 270,
    fontSize: 18,
    marginBottom: 20,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
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
