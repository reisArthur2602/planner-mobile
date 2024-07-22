import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TaskListProps } from './task-list';

import TaskCard from '../TaskCard';
import { RootTabParamList } from '../../../../routes/Tab/tab';
import { format } from 'date-fns';
import { TYPES } from '../../../../utils/types';
import { TypeTask } from '../../../../@types/task';

const TaskList = ({ tasks }: TaskListProps) => {
  const navigation =
    useNavigation<BottomTabNavigationProp<RootTabParamList, 'Edit'>>();

  const navigateToEdit = (id: string) => {
    navigation.navigate('Edit', { id });
  };

  const getTypeIcon = (type: TypeTask) => {
    const index = TYPES.findIndex((t) => t.type === type);
    return TYPES[index].icon;
  };

  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskCard
          task={item}
          date={format(new Date(item.when), 'dd/MM/yyyy')}
          time={format(new Date(item.when), 'HH:mm')}
          typeIcon={getTypeIcon(item.type)}
          onNavigation={navigateToEdit}
        />
      )}
    />
  );
};

export default TaskList;
