import React, { useEffect, useState } from 'react';
import { Task } from '../../@types/task';
import { SafeAreaView } from 'react-native';
import { TaskService } from '../../services/task/TaskService';
import { styles } from './styles';
import FilterBar from './sessions/FilterBar';

import { FILTERS } from '../../utils/filters';
import { FilterOptions } from './sessions/Filter/filter';
import TaskList from './sessions/TaskList';

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
      <FilterBar filters={FILTERS} onChange={setFilter} filter={filter} />
      <TaskList tasks={tasks} />
    </SafeAreaView>
  );
};

export default Dashboard;
