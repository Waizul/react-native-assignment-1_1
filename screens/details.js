import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

const Details = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/Media.png")} />
      <View style={styles.content}>
        <View style={styles.iconContainer}></View>
        <Text style={styles.title}>Boston Lettuce</Text>
        <View style={{ flexDirection: "row", alignItems:'center', gap:5 }}>
          <Text style={styles.title}>1.10</Text>
          <Text style={{ color: "#9586A8" }}>€ / piece</Text>
        </View>
        <Text style={{ color: "#06BE77", fontWeight:500, marginBottom:20 }}>~ 150 gr / piece</Text>
        <Text style={styles.title}>Spain</Text>
        <Text style={styles.desc}>
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </Text>
        <View style={styles.buttonContainer}>
          <Feather name="heart" style={styles.icon} size={24} color="black" />
          <TouchableOpacity style={styles.primaryBtn}>
          <Ionicons name="md-cart-outline" size={24} color="white" />
            <Text style={styles.primaryBtnText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    // backgroundColor: "#A259FF",
  },
  image: {
    height: "40%",
    width: "100%",
    padding: 10,
  },
  content: {
    marginTop: -20,
    backgroundColor: "#F6F5F5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "100%",
    padding: 20,
    //   flex: 1,
    //   alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2D0C57",
    marginVertical: 7,
  },
  desc: {
    color: "#9586A8",
    fontWeight: 400,
    fontSize: 17,
    textAlign: "center",
  },
  buttonContainer: {
      marginTop:30,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#D9D0E3",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  primaryBtn: {
    width: "84%",
    padding: 10,
    color: "#fff",
    backgroundColor: "#0BCE83",
    flexDirection: "row",
    gap:10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  primaryBtnText: {
    color: "#fff",
    fontWeight: "bold",
    paddingVertical: 5,
  },
});
