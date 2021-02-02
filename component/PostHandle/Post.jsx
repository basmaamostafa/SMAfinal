import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
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
import PostImagePicker from "./PostImagePicker";
// import firestore from "@react-native-firebase/firestore";

export default class Post extends Component {
  // constructor(props) {
  //   super(props);
  //   this.getUser();
  // }
  // getUser = async () => {
  //   const userDocument = await firestore()
  //     .collection("Users")
  //     .doc("IdltLtB5zOirN9pAEpQJ")
  //     .get();
  //   console.log(userDocument);
  // };
  render() {
    const {
      text,
      handleDelete,
      userName,
      imgProfile,
      image,
      setImage,
    } = this.props;
    // const [image, setImage] = this.props;

    return (
      <Content contentContainerStyle={styles.container}>
        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail
                style={styles.profile}
                source={{ uri: imgProfile }}
                // source={{
                //   uri:
                //     "https://images.unsplash.com/photo-1610303200652-3f869cdd5dc5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                // }}
              />
              <Body>
                <Text style={{ fontSize: 18 }}>{userName}</Text>
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
            {/* <Image
              source={{
                uri:
                  "https://images.unsplash.com/photo-1610303200652-3f869cdd5dc5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              }}
              style={{ height: 200, width: null, flex: 1 }}
            /> */}
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
                  />
                </Button>
                <Button transparent style={styles.btn}>
                  <MaterialCommunityIcons
                    name="delete-empty"
                    size={33}
                    color="black"
                    onPress={handleDelete}
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
