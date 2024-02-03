import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"
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
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder='your course goal'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' color='red' onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
})

export default GoalInput
