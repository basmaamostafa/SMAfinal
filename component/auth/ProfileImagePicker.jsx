import React, { useEffect } from "react";
import { View, Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export function ProfileImagePicker(props) {
  const pickImage = async (option) => {
    if (Platform.OS !== "web") {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
    if (option === 1) {
      imageFromCamera();
    } else {
      if (option === 2) {
        imageFromLibrary();
      }
    }
  };

  const imageFromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      props.setImgRef(result.uri);
    }
  };

  const imageFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      props.setImgRef(result.uri);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        onPress={() => pickImage(1)}
        style={{
          marginHorizontal: 15,
        }}
      >
        <FontAwesome name="camera" size={28} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => pickImage(2)}
        style={{
          marginHorizontal: 15,
        }}
      >
        <Entypo name="images" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
