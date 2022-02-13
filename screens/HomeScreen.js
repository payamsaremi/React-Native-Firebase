import { Button, View } from "react-native";
import Header from "../components/Header";
const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View
        style={{ justifyContent: "center", alignItems: "center", flex: "1" }}
      >
        <Header>Welcome</Header>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </>
  );
};

export default HomeScreen;
