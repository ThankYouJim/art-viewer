import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
  View,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import Card from "./CardComponent";

export default function App() {
  const navigation = useRouter();
  const [artwork, setArtwork] = useState({});
  const [artworks, setArtworks] = useState([]);

  getOne = async () => {
    fetch(
      "https://api.artic.edu/api/v1/artworks/129884?fields=id,title,image_id"
    )
      .then((response) => response.json())
      .then((jsonData) => {
        setArtwork({ ...jsonData.data, imageURL: getArtworkURL(jsonData) });
      })
      .catch((error) => console.error(error));
  };

  getSome = async () => {
    fetch(
      "https://api.artic.edu/api/v1/artworks?page=2&limit=3&fields=id,title,image_id"
    )
      .then((response) => response.json())
      .then(({ config, data }) => {
        const parsedData = data.map((artwork) => ({
          ...artwork,
          imageURL: `${config.iiif_url}/${artwork.image_id}/full/843,/0/default.jpg`,
        }));
        setArtworks(parsedData);
      });
  };

  getArtworkURL = (jsonData) => {
    const { config, data } = jsonData;
    const imageURL = `${config.iiif_url}/${data.image_id}/full/843,/0/default.jpg`;
    return imageURL;
  };

  useEffect(() => {
    //getOne();
    getSome();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Pressable
          onPress={() =>
            navigation.push("/details", {
              uri: artwork.imageURL,
              title: artwork.title,
            })
          }
        ></Pressable>
        <FlatList
          data={artworks}
          renderItem={({ item }) => (
            <Card uri={item.imageURL} title={item.title} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap',
    backgroundColor: "#25292e",
    alignItems: "center",
    color: "white",
    padding: 16
  },
});
