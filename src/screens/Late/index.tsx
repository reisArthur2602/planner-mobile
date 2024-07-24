import { SafeAreaView, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Task } from '../../@types/task';
import { TaskService } from '../../services/task/TaskService';
import { styles } from './styles';

import TaskList from '../Dashboard/sessions/TaskList';
import { useIsFocused } from '@react-navigation/native';

const Late = () => {
  const [tasks, setTasks] = useState<Task[] | []>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      await TaskService.late().then((response) =>
        setTasks(response.filter((t) => !t.done))
      );
    })();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.LateContainer}>
      <Text style={styles.lateTitle}>
        Tarefas Atrasadas
        <Text style={styles.lateCount}>{`(${tasks.length})`}</Text>
      </Text>
      <TaskList tasks={tasks} />
    </SafeAreaView>
  );
};

export default Late;
