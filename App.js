import { StyleSheet, View, FlatList, Button } from "react-native"
import { useState } from "react"
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const startAddGoalHandler = () => {
    setIsModalVisible(true)
  }

  const endAddGoalHandler = () => {
    setIsModalVisible(false)
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ])
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    // View is used as a parent container component to hold the child components
    <View style={styles.appContainer}>
      <Button
        title='Add New Goal'
        color='purple'
        onPress={startAddGoalHandler}
      />

      <GoalInput
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
        visible={isModalVisible}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
              id={itemData.item.id}
            />
          )}
          keyExtractor={(itemData) => itemData.id}
          alwaysBounceVertical={false}
        />
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
  goalsContainer: {
    flex: 5,
    overflow: "scroll",
  },
})
