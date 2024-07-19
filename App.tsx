import { ActivityIndicator, StatusBar } from 'react-native';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import Routes from './src/routes';
import { theme } from './src/theme';
import Header from './src/components/Header';
import { AuthProvider } from './src/context/authContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  {
    !fontsLoaded && (
      <ActivityIndicator color={theme.colors.indigo600} size={50} />
    );
  }

  return (
    <>
      <StatusBar backgroundColor={theme.colors.indigo900} />
      <AuthProvider>
        <Header />
        <Routes />
      </AuthProvider>
    </>
  );
}
