import { SafeAreaView, StyleSheet } from "react-native";

import Maps from "./components/Maps";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Maps />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
