import { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtworks } from "../redux/artworkSlice";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const artworks = useSelector((state) => state.artworks.items);
  const status = useSelector((state) => state.artworks.status);
  const error = useSelector((state) => state.artworks.error);

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.itemContainer}
      onPress={() =>
        router.push({
          pathname: "details",
          params: {
            name: item.title,
            title: item.title,
            author: item.author_display,
          },
        })
      }
    >
      <Image
        source={{ uri: item.image }}
        style={{
          backgroundColor: "white",
          width: 100,
          height: 100,
          marginRight: 8,
        }}
      ></Image>
      <Text style={styles.itemText}>{item.title}</Text>
    </Pressable>
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchArtworks());
    }
  }, [status, dispatch]);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Disco Gallery",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <FlatList
        data={artworks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "lightblue",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "pink",
    marginBottom: 10,
    borderRadius: 8,
  },
  itemText: {
    color: "white",
  },
});
