import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './stack.routes';
import TabRoutes from './tab.routes';
import { ActivityIndicator } from 'react-native';
import { useAuth } from '../hooks/useAuth';

const Routes = () => {
  const { loading, auth } = useAuth();

  if (loading) return <ActivityIndicator size={60} />;

  return (
    <NavigationContainer>
      {auth ? <TabRoutes /> : <StackRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
