import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";

export function PostImagePicker() {
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
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={pickImage}
        style={{
          marginVertical: 5,
          // justifyContent: "flex-end",
          alignItems: "flex-end",
          // flex: 1,,
          marginRight: 10,
        }}
      >
        <Entypo
          name="images"
          size={28}
          color="#000"
          // style={{ justifyContent: "flex-end", alignItems: "flex-end", flex: 1, }}
        />
      </TouchableOpacity>
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
    </View>
  );
}

// export default function (props) {
//   const navigation = useNavigation();
//   return <PostImagePicker {...props} navigation={navigation} />;
// }
