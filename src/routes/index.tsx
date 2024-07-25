import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import Tab from './Tab';
import Stack from './Stack';
import Loading from '../components/ui/Loading';

const Routes = () => {
  const { loadingAuth, auth } = useAuth();

  if (loadingAuth) return <Loading />;

  return (
    <NavigationContainer>{auth ? <Tab /> : <Stack />}</NavigationContainer>
  );
};

export default Routes;
