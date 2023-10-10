import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";

import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onConfirmNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    // enteredText is provided by React Native
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Input has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onConfirmNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my Number</Title>
      <Card>
        <InstructionText>Enter a number.</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: { flex: 1, marginTop: 100, alignItems: "center" },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    // a view only takes as much space as the content needs but flex 1 tells it to take all the space available
    flex: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
