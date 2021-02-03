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

export default class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { taskList, handleDelete, handleEdit } = this.props;

    return (
      <ScrollView>
        {taskList.map((task) => {
          return (
            <Post
              key={task.id}
              text={task.text}
              id={task.id}
              handleDelete={() => handleDelete(task.id)}
              // handleEdit={() => handleEdit(task.id)}
              posterId={task.posterId}
              posterName={task.posterName}
            />
          );
        })}
      </ScrollView>
    );
  }
}

// export default function (props) {
//   const navigation = useNavigation();
//   return <PostsList {...props} navigation={navigation} />;
// }

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // flexDirection: "row",
    // justifyContent: "center",
    // flex: 1,
    // marginTop: -250,
  },
});
