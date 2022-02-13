import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { createUser, auth } from "../firebase";
import tw from "twrnc";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // navigation.replace("Home");
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      }
    });
    return unsubscribe;
  }, []);

  const handleRegisteUser = () => {
    createUser(email, password)
      .then(() => {
        console.log("user created");
        // navigation.navigate("Home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <View
      style={tw`min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`}
    >
      <View style={tw`max-w-md w-full space-y-8`}>
        <Text
          style={tw`mt-6 text-center text-3xl font-semibold text-gray-900 mb-4`}
        >
          Lets Login
        </Text>
        <View style={tw`rounded-md -space-y-px  mb-4`}>
          <TextInput
            value={email}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            style={tw`appearance-none bg-white rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-lg my-2`}
          />
          <TextInput
            value={password}
            placeholder="Pawssword"
            onChangeText={(password) => setPassword(password)}
            style={tw`appearance-none bg-white rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-lg mb-4`}
            secureTextEntry
          />
        </View>
      </View>
      <TouchableOpacity
        style={tw`group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        onPress={() => handleRegisteUser()}
      >
        <Text style={tw`text-lg text-white font-bold`}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
