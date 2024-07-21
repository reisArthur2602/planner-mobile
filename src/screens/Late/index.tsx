import { SafeAreaView, FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Task } from '../../@types/task';
import { TaskService } from '../../services/task/TaskService';
import { styles } from './styles';

import TaskCard from '../../components/TaskCard';

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
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCard {...item} key={item.id} />}
        contentContainerStyle={{ gap: 12 }}
      />
    </SafeAreaView>
  );
};

export default Late;
