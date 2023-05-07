import { View, Text, ScrollView } from "react-native";
import { Stack, useSearchParams, useRouter } from "expo-router";

export default function Details() {
  const router = useRouter();
  const params = useSearchParams();

  return (
    <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
      <Stack.Screen
        options={{
          title: params.name,
        }}
      />
      {/*<Text
        onPress={() => {
          router.setParams({ name: "Updated" });
        }}
      >
        Update the title
      </Text>*/}
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          maxHeight: "30%",
          paddingHorizontal: 16,
        }}
      />
      <View style={{ paddingHorizontal: 8 }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            lineHeight: 24,
            marginVertical: 12,
          }}
        >
          {params.name}
        </Text>
      </View>
      <ScrollView
        style={{
          margin: 16,
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: "grey",
          borderRadius: 16,
        }}
      >
        <Text style={{ fontSize: 16 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          hendrerit nisl nec dui malesuada, quis laoreet ipsum sodales. Donec
          dignissim magna sit amet libero pharetra, sed convallis nunc
          malesuada. In eu turpis augue.
        </Text>
      </ScrollView>
    </View>
  );
}
