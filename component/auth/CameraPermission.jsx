import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import * as firebase from "firebase";

export function CameraPermission(props) {
  const [image, setImage] = useState(null);

  // useEffect(() => {
  //   async () => {
  //     if (Platform.OS !== "web") {
  //       const { status } = await ImagePicker.getCameraPermissionsAsync();
  //       if (status !== "granted") {
  //         alert("Sorry, we need camera roll permissions to make this work!");
  //       }
  //     }
  //   };
  // });

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync()({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
      this.uploadImage(result.uri, props.email)
        .then(() => {
          Alert.alert("Success");
        })
        .catch((error) => {
          Alert.alert(error);
        });
    }
  };
  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase
      .storage()
      .ref()
      .child("ProfileImages/" + imageName.replace(/\W/g, ""));
    return ref.put(blob);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={pickImage} style={{ marginBottom: 50 }}>
        <Entypo name="images" size={28} color="#fff" />
      </TouchableOpacity>
      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            // alignItems: "center",
            // justifyContent: "center",
            // alignSelf: "center",
            // alignContent: "center",
            // flex: 1,
            // flexDirection: "row",
            // marginHorizontal: 140,
            marginRight: 100,
          }}
        />
      )}
    </View>
  );
}

// export default function (props) {
//   const navigation = useNavigation();
//   return <ProfileImagePicker {...props} navigation={navigation} />;
// }
