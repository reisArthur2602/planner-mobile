import { FlatList, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import FilterBar from './sessions/FilterBar';

import { TaskService } from '../../services/task/TaskService';
import { Task } from '../../@types/task';
import TaskCard from '../../components/TaskCard';
import { FILTERS } from '../../utils/filters';
import { FilterOptions } from './sessions/Filter/filter';

const Dashboard = () => {
  const [filter, setFilter] = useState<FilterOptions>(FILTERS[0].type);
  const [tasks, setTasks] = useState<Task[] | []>([]);

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
      <FilterBar filters={FILTERS} onChange={setFilter} filter={filter} />

      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCard {...item} key={item.id} />}
        contentContainerStyle={{ gap: 12 }}
      />
    </SafeAreaView>
  );
};

export default Dashboard;
