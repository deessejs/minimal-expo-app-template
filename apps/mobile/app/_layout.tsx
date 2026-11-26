import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#f4f1ff' },
          headerTintColor: '#35276b',
          contentStyle: { backgroundColor: '#fbfaff' },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'DeesseJS Starter' }} />
        <Stack.Screen name="details" options={{ title: 'A second screen' }} />
      </Stack>
    </>
  );
}
