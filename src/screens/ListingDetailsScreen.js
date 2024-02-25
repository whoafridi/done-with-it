import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red carpet</AppText>
        <AppText style={styles.price}>50$</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/chair.jpg")}
            title="Mosh Hamedani"
            subTitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 50,
  },
});
