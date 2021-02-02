import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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
import Post from "./Post";
import { PostImagePicker } from "./PostImagePicker";

export default class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      imgRef: null,
    };

    this.setImgRef = this.setImgRef.bind(this);
  }
  setImgRef = (imgRef) => {
    this.setState({ imgRef: imgRef });
  };

  // async uploadUserPostPicture() {
  //   var uid = firebase.auth().currentUser.uid;
  //   const response = await fetch(this.state.imgRef);
  //   const blob = await response.blob();
  //   var refPost = firebase
  //     .storage()
  //     .ref()
  //     .child("PostImages/" + uid);
  //   return ref.put(blob);
  // }

  render() {
    const { handleSubmit, handleChange, task } = this.props;

    return (
      // <Container>
      <Content contentContainerStyle={styles.container}>
        {/* <ScrollView> */}
        <View style={{ paddingBottom: 30 }}>
          <TextInput
            style={styles.textInput}
            placeholder="Write Your Caption"
            placeholderTextColor="rgba(0,0,0,0.5)"
            onChangeText={handleChange}
            value={task}
          />
          {/* <PostImagePicker /> */}
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
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
        </View>

        {/* <Post />  */}
        {/* </ScrollView> */}
      </Content>
      // </Container>
    );
  }
}

// export default function (props) {
//   const navigation = useNavigation();
//   return <PostForm {...props} navigation={navigation} />;
// }

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // flex: 1,
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
