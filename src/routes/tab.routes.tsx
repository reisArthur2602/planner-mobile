import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Task from '../screens/Task';
import Edit from '../screens/Edit';
import Late from '../screens/Late';

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Navigator>
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Task" component={Task} />
      <Screen name="Late" component={Late} />
      <Screen name="Edit" component={Edit}/>
    </Navigator>
  );
};

export default TabRoutes;
