import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function Card({ uri, title }) {
  return (
    <View styles={styles.cardContainer}>
      <Image source={{ uri: uri }} style={styles.image} />
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
  },
  image: {
    width: 120,
    height: 200,
    borderRadius: 18,
  },
});
