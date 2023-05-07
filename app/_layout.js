import { Stack } from "expo-router";
import store from "../redux/store";
import { Provider } from "react-redux";

export default function Root() {
  return (
    <Provider store={store}>
      <Stack
        initialRouteName="home"
        screenOptions={{
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Provider>
  );
}
