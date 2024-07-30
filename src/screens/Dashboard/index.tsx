import React, { useEffect, useState } from 'react';
import { Task } from '../../@types/task';
import { SafeAreaView } from 'react-native';
import { TaskService } from '../../services/task/TaskService';
import { styles } from './styles';
import FilterBar from './sessions/FilterBar';

import { FILTERS } from '../../utils/filters';
import { FilterOptions } from './sessions/Filter/filter';
import TaskList from './sessions/TaskList';
import { useIsFocused } from '@react-navigation/native';

import Loading from '../../components/ui/Loading';
import Empty from '../../components/ui/Empty';

const Dashboard = () => {
  const [filter, setFilter] = useState<FilterOptions>(FILTERS[0].type);
  const [tasks, setTasks] = useState<Task[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      await TaskService.getByFilter(filter).then((response) => {
        setTasks(response);
        setLoading(false);
      });
    })();
  }, [filter, isFocused]);

  if (loading) return <Loading />;
 
  return (
    <SafeAreaView style={styles.dashboardContainer}>
      <FilterBar filters={FILTERS} onChange={setFilter} filter={filter} />
      {tasks.length === 0 ? (
        <Empty title="Nenhuma tarefa pendente" />
      ) : (
        <TaskList tasks={tasks} />
      )}
    </SafeAreaView>
  );
};

export default Dashboard;
