import { StyleSheet, View, Image } from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen() {
  return (
    <View>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          alt={"Success"}
          source={require("../assets/images/success.png")}
        />
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: 400,
    height: 400,
    // natively to create a circle we set the border radius to half of our square!
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
    alignItems: 'center'
  },
  image: {
    height: '100%', 
    width: '100%',
  },
});
