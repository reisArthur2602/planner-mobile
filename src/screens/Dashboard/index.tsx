import { FlatList, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import FilterBar from '../../components/FilterBar';
import { useDashboard } from '../../hooks/useDashboard';
import { TaskService } from '../../services/task/TaskService';
import { Task } from '../../@types/task';
import TaskCard from '../../components/TaskCard';

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[] | []>([]);
  const { filter } = useDashboard();

  const fetchTasks = async () => {
    const data = await TaskService.getByFilter(filter);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  return (
    <SafeAreaView style={styles.dashboardContainer}>
      {/* filtro */}
      <FilterBar />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCard {...item} key={item.id} />}
        contentContainerStyle={{ gap: 12 }}
      />
    </SafeAreaView>
  );
};

export default Dashboard;
