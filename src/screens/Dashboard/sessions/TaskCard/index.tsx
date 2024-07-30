import { View, Text, Pressable } from 'react-native';

import { TaskCardProps } from './task-card';
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
      style={[styles.taskContainer , task.done && styles.doneTask]}
      onPress={() => onNavigation(task.id)}
    >
      <View style={styles.iconTask}>{typeIcon}</View>

      <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail' >{task.title}</Text>

      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.dateInfo}>{date}</Text>
        <Text style={styles.dateInfo}>{time}</Text>
      </View>
    </Pressable>
  );
};

export default TaskCard;
