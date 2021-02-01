import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";

export function ProfileImagePicker(props) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    };
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      props.setImgRef(result.uri);
    }
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
