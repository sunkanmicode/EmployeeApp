
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { toastConfig } from './custom_comp/CustomToast';




// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function RootLayout() {
 
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className=" flex-1">
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <Toast config={toastConfig} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
