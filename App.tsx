import { ActivityIndicator, StatusBar } from "react-native";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import Routes from "./src/routes";
import { theme } from "./src/theme";
import Header from "./src/components/Header";
import { AuthProvider } from "./src/context/Auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded)
    return <ActivityIndicator color={theme.colors.indigo600} size={50} />;

  return (
    <AuthProvider>
      <StatusBar backgroundColor={theme.colors.indigo900} />
      <Header />
      <Routes />
    </AuthProvider>
  );
}
