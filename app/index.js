import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Image } from "react-native";
import { useRouter } from "expo-router";

export default function App() {
  const navigation = useRouter();
  const [imageURL, setImageURL] = useState("");

  test = async () => {
    fetch(
      "https://api.artic.edu/api/v1/artworks/129884?fields=id,title,image_id"
    )
      .then((response) => response.json())
      .then((jsonData) => {
        const { config, data } = jsonData;
        const image = `${config.iiif_url}/${data.image_id}/full/843,/0/default.jpg`;
        setImageURL(image);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    //test();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageURL }} style={styles.image} />
        <Button title="Details" onPress={() => navigation.push("/details")} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
