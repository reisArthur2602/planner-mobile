import { FilterOptions } from '../../screens/Dashboard/sessions/Filter/filter';
import { Task } from '../../@types/task';
import { Api } from '../api/axios-config';

const create = async (
  params: Pick<Task, 'title' | 'description' | 'when' | 'type'>
): Promise<void> => {
  await Api.post('/task', params);
};

const getByFilter = async (filter: FilterOptions): Promise<Task[] | []> => {
  const { data } = await Api.get(`/task/${filter}`);
  return data;
};


const late = async (): Promise<Task[] | []> => {
  const { data } = await Api.get('/task/late');
  return data;
};

export const TaskService = { create, getByFilter , late };
