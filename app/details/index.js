import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";

export default function Details({ route }) {
  console.log(">>>", route.params);
  //const { uri, title } = props.route.params;
  //useEffect(() => {
  // fetch artwork details here
  //}, []);

  return (
    <View>
      {/*<Image source={{ uri: uri }} />
      <Text>{title}</Text>*/}
      <Text>DDDDD</Text>
    </View>
  );
}
