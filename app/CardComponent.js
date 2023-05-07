import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function Card({ uri, title }) {
  return (
    <View styles={styles.container}>
      <Image source={{ uri: uri }} style={styles.image} />
      <Text styles={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 16,
  },
  title: {
    color: "#fff",
  },
});
