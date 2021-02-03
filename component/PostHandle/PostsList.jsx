import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

import Post from "./Post";

export default class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Posts = (props) => {
    const navigation = useNavigation();
    return <Post {...props} navigation={navigation} />;
  };
  render() {
    const { taskList, handleDelete } = this.props;
    console.log(taskList);
    return (
      <ScrollView>
        {taskList.map((task) => {
          return (
            <this.Posts
              key={task.id}
              text={task.text}
              id={task.id}
              handleDelete={() => handleDelete(task.id)}
              posterId={task.posterId}
              posterName={task.posterName}
            />
          );
        })}
      </ScrollView>
    );
  }
}
