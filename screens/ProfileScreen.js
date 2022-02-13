import { auth, updateProfile, signOut } from "../firebase";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useEffect, useState } from "react";
import { ImagePickerButton } from "../components/ImagePickerButton";
import tw from "twrnc";

const ProfileScreen = ({ navigation }) => {
  const user = auth.currentUser;

  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    handleUserProfileData();
  }, []);

  const handleUserProfileData = () => {
    user.providerData.forEach((profile) => {
      setUserProfile((prevData) => ({
        ...prevData,
        providerId: profile.providerId,
        uid: profile.uid,
        displayName: profile.displayName,
        email: profile.email,
        photoURL: profile.photoURL,
      }));
    });
  };
  const handleLogoOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User Signed out succcesfully");
        // navigation.replace("Login");
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      })
      .catch((err) => console.log("there was an error signing out"));
  };

  const editProfile = () => {
    console.log(userProfile);
    updateProfile(user, {
      ...userProfile,
    })
      .then(() => {
        console.log("profile updated");
      })
      .catch((err) => console.log("error", err));
  };
  return (
    <>
      <View style={tw`flex-1 justyfy-center alignitems-center my-4`}>
        <ImagePickerButton />
        <View style={tw`my-4 mx-2`}>
          <TextInput
            value={userProfile.displayName ?? ""}
            placeholder="name"
            onChangeText={(displayName) =>
              setUserProfile((prevState) => ({
                ...prevState,
                displayName: displayName,
              }))
            }
            style={tw`appearance-none bg-white rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-md mb-1`}
          />
          <TextInput
            value={userProfile?.email}
            placeholder="email"
            onChangeText={() => console.log("ddd")}
            style={tw`appearance-none bg-white rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-md mb-4`}
            contextMenuHidden={true}
          />
        </View>
        <Button title="update profile" onPress={() => editProfile()} />
        <Button
          title="Sign Out"
          color={"black"}
          onPress={() => handleLogoOut()}
        />
        {console.log("hereee", userProfile)}
      </View>
    </>
  );
};

export default ProfileScreen;
