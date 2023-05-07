import { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Stack, useSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtwork } from "../redux/artworkSlice";

export default function Details() {
  const artworks = useSelector((state) => state.artworks.items);
  const dispatch = useDispatch();
  const params = useSearchParams();
  const [artwork, setArtwork] = useState();

  useEffect(() => {
    console.log('PPPPP', params);
    // Fetch more data
    if (params.id) {
      dispatch(fetchArtwork(params.id));
    }
    // 
    if (params.artist_display) {
      const artwork = artworks.find((item) => item.id === params.id);
      setArtwork(artwork);
    }
  }, [params, dispatch]);

  if (!artwork) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
      <Stack.Screen
        options={{
          title: artwork.title,
        }}
      />
      <Image
        source={{ uri: artwork.image }}
        style={{
          flex: 1,
          backgroundColor: "white",
          maxHeight: "30%",
          paddingHorizontal: 16,
        }}
      />
      <ScrollView
        style={{
          margin: 16,
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: "grey",
          borderRadius: 16,
        }}
      >
        <View style={{ fontSize: 16 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              lineHeight: 24,
              marginVertical: 12,
            }}
          >
            {artwork.artist_display}
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            hendrerit nisl nec dui malesuada, quis laoreet ipsum sodales. Donec
            dignissim magna sit amet libero pharetra, sed convallis nunc
            malesuada. In eu turpis augue.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
