import { Button, StyleSheet, Text, TextInput, View } from "react-native"

export default function App() {
  return (
    // View is used as a parent container component to hold the child components
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='your course goal' style={styles.textInput} />
        <Button title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
})
