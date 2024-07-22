import { SafeAreaView, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Task } from '../../@types/task';
import { TaskService } from '../../services/task/TaskService';
import { styles } from './styles';

import TaskList from '../Dashboard/sessions/TaskList';

const Late = () => {
  const [tasks, setTasks] = useState<Task[] | []>([]);

  const fetchTasks = async () => {
    const data = await TaskService.late();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

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
