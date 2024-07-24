import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import QrCode from '../../screens/QrCode';
import { StackParamList } from './stack';

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

const Stack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Qrcode" component={QrCode} />
    </Navigator>
  );
};

export default Stack;
