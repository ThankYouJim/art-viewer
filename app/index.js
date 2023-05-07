import { Stack, useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const items = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
];

export default function Home() {
  //const { post } = useSearchParams();
  const router = useRouter();

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.itemContainer}
      onPress={() =>
        router.push({
          pathname: "details",
          params: {
            name: item.title,
          },
        })
      }
    >
      <View style={{ backgroundColor: "white", width: 100, height: 100, marginRight: 4 }}></View>
      <Text style={styles.itemText}>{item.title}</Text>
    </Pressable>
  );

  //useEffect(() => {
  //  if (post) {
  //    // Post updated, do something with `post`
  //    // For example, send the post to the server
  //  }
  //}, [post]);

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
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "pink",
    padding: 15,
    marginBottom: 10,
  },
  itemText: {
    color: "white",
  },
});
