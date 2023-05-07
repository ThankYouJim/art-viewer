import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Pressable, FlatList } from "react-native";
import { useRouter } from "expo-router";
import Card from "./CardComponent";

export default function App() {
  const navigation = useRouter();
  const [artwork, setArtwork] = useState({});
  const [artworks, setArtworks] = useState();

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

  renderItems = ({ item }) => (
    <Pressable
      onPress={() =>
        navigation.push("/details", {
          uri: 'pls',
          title: 'ahhhh',
        })
      }
    >
      <Card uri={item.imageURL} title={item.title} />
    </Pressable>
  );

  useEffect(() => {
    //getOne();
    getSome();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {artwork ? (
            <FlatList
              data={artworks}
              renderItem={renderItems}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <Text>Nothing yet!</Text>
          )}
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#25292e",
    alignItems: "center",
    color: "white",
    padding: 16,
  },
});
