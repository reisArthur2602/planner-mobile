import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import Tab from './Tab';
import Stack from './Stack';

export default function () {
  const { loading, auth } = useAuth();

  if (loading) return <ActivityIndicator size={60} />;

  return (
    <NavigationContainer>{auth ? <Tab /> : <Stack />}</NavigationContainer>
  );
}
