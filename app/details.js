import { View, Text, ScrollView } from "react-native";
import { Stack, useSearchParams } from "expo-router";

export default function Details() {
  const params = useSearchParams();

  return (
    <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
      <Stack.Screen
        options={{
          title: params.name,
        }}
      />
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
          {params.title}
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
          {params.author}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          hendrerit nisl nec dui malesuada, quis laoreet ipsum sodales. Donec
          dignissim magna sit amet libero pharetra, sed convallis nunc
          malesuada. In eu turpis augue.
        </Text>
      </ScrollView>
    </View>
  );
}
