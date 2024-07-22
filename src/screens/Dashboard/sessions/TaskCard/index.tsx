import { View, Text, Pressable } from 'react-native';

import { TaskCardProps } from './task-list';
import { styles } from './styles';

const TaskCard = ({
  typeIcon,
  task,
  date,
  time,
  onNavigation,
}: TaskCardProps) => {
  return (
    <Pressable
      style={styles.taskContainer}
      onPress={() => onNavigation(task.id)}
    >
      <View style={styles.iconTask}>{typeIcon}</View>

      <Text style={styles.title}>{task.title}</Text>

      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.dateInfo}>{date}</Text>
        <Text style={styles.dateInfo}>{time}</Text>
      </View>
    </Pressable>
  );
};

export default TaskCard;
