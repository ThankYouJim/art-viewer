import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      initialRouteName="home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "forestgreen",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  );
}