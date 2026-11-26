import '../global.css';

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'DeesseJS Starter' }} />
        <Stack.Screen name="details" options={{ title: 'A second screen' }} />
      </Stack>
    </>
  );
}
