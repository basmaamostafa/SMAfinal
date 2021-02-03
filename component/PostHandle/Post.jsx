import React, { Component } from "react";
import { Image, View, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
} from "native-base";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
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

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postImage: null,
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

  componentDidMount() {
    this.getImageURI(this.props.id);
    this.getPosterImageURI(this.props.posterId);
  }

  render() {
    const {
      text,
      handleDelete,
      posterName,
      image,
      handleEdit,
      id,
    } = this.props;

    const { postImage, posterImage } = this.state;

    return (
      <Content contentContainerStyle={styles.container}>
        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail style={styles.profile} source={{ uri: posterImage }} />
              <Body>
                <Text style={{ fontSize: 18 }}>{posterName}</Text>
              </Body>
            </Left>
          </CardItem>
          <Text style={styles.caption}> {text}</Text>
          <CardItem cardBody>
            {image && (
              <Image
                source={{ uri: image }}
                style={{
                  width: 270,
                  height: 200,
                  borderRadius: 5,

                  alignSelf: "center",

                  marginVertical: 10,
                }}
              />
            )}
            {postImage && (
              <Image
                source={{
                  uri: postImage,
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            )}
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <AntDesign name="like1" size={33} color="black" />
                <Text>12 Likes</Text>
              </Button>
            </Left>

            <Right>
              <View style={styles.btns}>
                <Button transparent style={styles.btn}>
                  <MaterialCommunityIcons
                    name="comment-edit"
                    size={33}
                    color="black"
                    // onPress={handleEdit}
                  />
                </Button>
                <Button transparent style={styles.btn}>
                  <MaterialCommunityIcons
                    name="delete-empty"
                    size={33}
                    color="black"
                    onPress={() => handleDelete(id)}
                  />
                </Button>
              </View>
            </Right>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

// export default function (props) {
//   const navigation = useNavigation();
//   return <Post {...props} navigation={navigation} />;
// }

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // justifyContent: "center",
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
    marginLeft: 20,
  },
  caption: {
    marginLeft: 15,
    paddingBottom: 10,
  },
});
