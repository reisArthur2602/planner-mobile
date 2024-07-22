import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bell, Edit, House, SquareCheckBig } from 'lucide-react-native';
import { RootTabParamList } from '../tab.routes';
import { theme } from '../../theme';
import Dashboard from '../../screens/Dashboard';
import Task from '../../screens/Task';
import Late from '../../screens/Late';

const { Navigator, Screen } = createBottomTabNavigator<RootTabParamList>();

export default function () {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.indigo600,
        tabBarInactiveTintColor: theme.colors.indigo100,
        tabBarStyle: {
          borderTopColor: theme.colors.indigo800,
          borderTopWidth: 3,
          borderStyle: 'solid',
          backgroundColor: theme.colors.indigo900,
          height: 70,
        },
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <House size={24} color={color} strokeWidth={2.5} />
          ),
        }}
      />
      <Screen
        name="Task"
        component={Task}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SquareCheckBig size={24} color={color} strokeWidth={2.5} />
          ),
        }}
      />
      <Screen
        name="Late"
        component={Late}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Bell size={24} color={color} strokeWidth={2.5} />
          ),
        }}
      />
      <Screen
        name="Edit"
        component={Edit}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}
