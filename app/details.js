import { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Stack, useSearchParams } from "expo-router";

export default function Details() {
  const [artwork, setArtwork] = useState();
  const { id } = useSearchParams();

  getArtwork = async (id) => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,image_id,date_start,date_end,`
    );
    const raw = await response.json();
    const { data, config } = raw;
    setArtwork({
      ...data,
      id: String(data.id),
      image: `${config.iiif_url}/${data.image_id}/full/843,/0/default.jpg`,
    });
  };

  useEffect(() => {
    if (id) getArtwork(id);
  }, [id]);

  if (!artwork) {
    return <Text>Loading...</Text>;
  }

  const Dates =
    artwork.date_end - artwork.date_state
      ? `${artwork.date_start} - ${artwork.date_end}`
      : artwork.date_end;

  return (
    <View style={{ flex: 1, backgroundColor: 'lightgrey' }}>
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
          minHeight: "30%",
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
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontSize: 16,
                fontStyle: "italic",
              }}
            >
              {artwork.title} ({Dates})
            </Text>
            <Text style={{ fontWeight: "bold", textAlign: "right" }}>
              {artwork.artist_display}
            </Text>
          </View>
          <Text style={{ marginTop: 12 }}>
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
