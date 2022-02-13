import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import tw from "twrnc";
export const ImagePickerButton = () => {
  const [image, setImage] = useState(imagePlaceholder);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
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

  const imagePlaceholder = require("../img/profile.png");
  const src = { uri: image };
  return (
    <View style={tw`shadow-sm mx-auto`}>
      {image ? (
        <Image source={src} style={tw`w-32 h-32 rounded-full`} />
      ) : (
        <Image source={imagePlaceholder} style={tw`w-32 h-32 rounded-full`} />
      )}
      <Button title="upload image" onPress={pickImage} />
    </View>
  );
};
