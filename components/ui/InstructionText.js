import { StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
    // [propStyle, defaultStyle] default overrides prop in case of clashes
  return  <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
      },
});
