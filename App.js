import { Button, StyleSheet, Text, View } from "react-native"

export default function App() {
  return (
    // View is used as a parent container component to hold the child components
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <Button title='Press me' onPress={() => alert("Button pressed")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
