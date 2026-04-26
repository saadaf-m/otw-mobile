import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="post-ride" />
      <Stack.Screen name="ride/[id]" />
      <Stack.Screen name="active-ride" />
      <Stack.Screen name="ride-complete" />
      <Stack.Screen name="no-show" />
    </Stack>
  );
}
