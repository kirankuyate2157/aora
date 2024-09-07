import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const App = () => {
  ///new user configuration
  return (
    <View style={styles.container}>
      <Text> Agora!</Text>
      <StatusBar style="auto" />
      <Link href="profile" style={{ color: "blue" }}>
        go to profile
      </Link>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bf4bff",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffff",
    padding: 20,
  },
});
