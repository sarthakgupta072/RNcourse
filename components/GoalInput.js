import { StyleSheet, View, TextInput, Button } from "react-native"
import { useState } from "react"

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("")

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText("")
  }

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='your course goal'
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
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
})

export default GoalInput
