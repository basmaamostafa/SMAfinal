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
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class Post extends Component {
  render() {
    const { text, handleDelete, displayName } = this.props;

    return (
      <Content>
        <Card style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail
                style={styles.profile}
                source={{
                  uri:
                    "https://images.unsplash.com/photo-1610303200652-3f869cdd5dc5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                }}
              />
              <Body>
                <Text style={{ fontSize: 20 }}>name</Text>
              </Body>
            </Left>
          </CardItem>
          <Text style={styles.caption}> {text}</Text>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  "https://images.unsplash.com/photo-1610303200652-3f869cdd5dc5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              }}
              style={{ height: 200, width: null, flex: 1 }}
            />
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
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginBottom: 10,
  },
  profile: {
    width: 50,
    height: 50,
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
