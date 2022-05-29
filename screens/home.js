import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Home = ({navigation}) => {
    const onPressLink = () => {
        navigation.navigate('Details')
    }
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.circle}>
          <Text style={styles.logo}>W</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={require("../assets/Vector.png")} />
        </View>
        <Text style={styles.title}>Non-Contact</Text>
        <Text style={styles.title}>Deliveries</Text>
        <Text style={styles.desc}>
          When placing an order, select the option “Contactless delivery” and
          the courier will leave your order at the door.
        </Text>

        <TouchableOpacity style={styles.primaryBtn} onPress={onPressLink}>
          <Text style={styles.primaryBtnText}>ORDER NOW</Text>
        </TouchableOpacity>
        <Text style={{ color: "#9586A8" }}>DISMISS</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A259FF",
  },
  logoContainer: {
    height: '40%',
  },
  circle: {
    marginTop: 40,
    marginLeft: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "#fff",
    borderWidth: 2,
    backgroundColor: "#CDFFB6",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    color: "#A259FF",
    padding: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  content: {
    backgroundColor: "#F6F5F5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "100%",
    padding: 20,
    paddingTop: 50,
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  icon: {
    height: 40,
    width: 35.14,
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2D0C57",
  },
  desc: {
    marginTop: 20,
    color: "#9586A8",
    fontWeight: 400,
    fontSize: 17,
    textAlign: "center",
  },
  primaryBtn: {
    width: "100%",
    padding: 10,
    color: "#fff",
    backgroundColor: "#0BCE83",
    marginTop: 50,
    marginBottom: 20,
    textAlign: "center",
    borderRadius: 5,
  },
  primaryBtnText: {
    color: "#fff",
    fontWeight: "bold",
    paddingVertical: 5,
  },
});
