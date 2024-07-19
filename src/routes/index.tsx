import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './stack.routes';
import TabRoutes from './tab.routes';
import { ActivityIndicator } from 'react-native';

const Routes = () => {
  const loading = false;
  const auth = false;

  if (loading) return <ActivityIndicator size={40} />;

  return (
    <NavigationContainer>
      {auth ? <TabRoutes /> : <StackRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
