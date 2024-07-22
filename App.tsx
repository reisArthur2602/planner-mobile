import { ActivityIndicator, StatusBar } from 'react-native';

import { AuthProvider } from './src/context/Auth';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { theme } from './src/theme';

import Routes from './src/routes';
import Header from './src/components/ui/Header';

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
