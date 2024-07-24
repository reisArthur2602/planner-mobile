import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import Tab from './Tab';
import Stack from './Stack';
import Loading from '../components/ui/Loading';

const Routes = () => {
  const { loading, auth } = useAuth();

  if (loading) return <Loading />;

  return (
    <NavigationContainer>{auth ? <Tab /> : <Stack />}</NavigationContainer>
  );
};

export default Routes;
