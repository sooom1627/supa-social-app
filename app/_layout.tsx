import { Stack } from "expo-router";

import "../assets/styles/global.css";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
    </Stack>
  );
}
