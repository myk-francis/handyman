import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native'
import React from 'react'
import { FONTS, SIZES } from "../constants";

const GoalsHome = () => {
  const [enteredGoal, setEnteredGoal] = React.useState('')
  const [courseGoals, setCourseGoals] = React.useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, courseGoals])
  }

  return (
    <View style={{ flex: 1, padding: 50 }}>
      <Text style={styles.title}>GoalsHome</Text>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Course Goal' onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <View>
        {courseGoals.map((goal) => <View style={styles.listItem} key={goal}><Text>{goal}</Text></View>)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input : { 
    width: "80%",
    borderColor: 'black', 
    borderWidth: 1,
  },
  title : {
    fontFamily: FONTS.bold,
    fontSize: SIZES.medium,
  },
  listItem : {
    padding : 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default GoalsHome
