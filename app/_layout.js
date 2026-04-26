import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { ThemeProvider } from '../src/context/ThemeContext';
import { RideProvider } from '../src/context/RideContext';
import { ModeProvider } from '../src/context/ModeContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RideProvider>
        <ModeProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
          <StatusBar style="light" />
        </ModeProvider>
      </RideProvider>
    </ThemeProvider>
  );
}
