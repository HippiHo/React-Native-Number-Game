import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.cardContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    // align items along the main axis which is column in React Native
    justifyContent: "center",
    // align items along the cross axis
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // shadow for Android
    elevation: 4,
    // shadow for IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
