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
    const {
      taskList,
      handleDelete,
      userName,
      imgProfile,
      handleEdit,
    } = this.props;

    return (
      <Container style={styles.container}>
        <ScrollView>
          <View>
            {taskList.map((task) => {
              return (
                <Post
                  key={task.id}
                  text={task.text}
                  handleDelete={() => handleDelete(task.id)}
                  handleEdit={() => handleEdit(task.id)}
                  imgProfile={imgProfile}
                  userName={userName}
                />
              );
            })}
          </View>
        </ScrollView>
      </Container>
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
