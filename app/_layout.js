import { Stack } from "expo-router";
import { Details } from "./details";

export default function HomeLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerStyle: {
          backgroundColor: "forestgreen",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Welcome",
        }}
      />
      {/*<Stack.Screen name="details" />*/}
    </Stack>
  );
}
