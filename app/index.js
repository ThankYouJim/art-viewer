import { useEffect } from "react";
import {
  Link,
  Stack,
  useNavigation,
  useRouter,
  useSearchParams,
} from "expo-router";
import {
  Image,
  Text,
  View,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";

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
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: "Disco Gallery",
          // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <Text>Home Screen</Text>

      <Link href={{ pathname: "details", params: { name: "Bacon" } }}>
        Go to Details
      </Link>
      <Text styles={styles.header}>List of artwork</Text>
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
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  itemText: {
    color: "white",
  },
});
